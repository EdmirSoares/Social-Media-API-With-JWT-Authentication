import { Request, Response, NextFunction } from "express";
import { signupSchema } from "../middlewares/validator";
import User from "../models/usersModel";
import { doHashing, doHashingValidation } from "../utils/hashing";
import jwt from "jsonwebtoken";
import { transport } from "../middlewares/sendEmail";

export async function signup(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    console.log("Password received:", password);

    try {
        const { error, value } = signupSchema.validate({ email, password });

        if (error) {
            res.status(401).json({
                success: false,
                message: error.details[0].message,
            });
            return;
        }

        const userAlreadyExists = await User.findOne({ email });

        if (userAlreadyExists) {
            res.status(401).json({
                success: false,
                message: "User already exists",
            });
            return;
        }

        const hashedPassword = await doHashing(password, 12);

        const newUser = new User({ email, password: hashedPassword });

        await newUser.save();

        const userWithoutPassword = await User.findOne({ email }).select(
            "-password"
        );

        res.status(201).json({
            success: true,
            message: "User created successfully",
            result: userWithoutPassword,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export async function signin(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    try {
        const { error, value } = signupSchema.validate({ email, password });
        if (error) {
            res.status(401).json({
                success: false,
                message: error.details[0].message,
            });
            return;
        }

        const existingUser = await User.findOne({ email }).select("+password");

        if (!existingUser) {
            res.status(401).json({
                success: false,
                message: "User does not exist",
            });
            return;
        }

        const result = await doHashingValidation(
            password,
            existingUser.password
        );

        if (!result) {
            res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
            return;
        }

        const token = jwt.sign(
            {
                userId: existingUser._id,
                email: existingUser.email,
                verified: existingUser.verified,
            },
            process.env.JWT_TOKEN_SECRET || "",
            { expiresIn: "2   h" }
        );

        res.cookie("Autorization", "Bearer " + token, {
            expires: new Date(Date.now() + 8 * 3600000),
            httpOnly: process.env.NODE_ENV === "production" ? true : false,
            secure: process.env.NODE_ENV === "production" ? true : false,
        })
            .json({
                success: true,
                message: "User logged in successfully",
                token,
            });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export async function signout(req: Request, res: Response): Promise<void> {
    res.clearCookie("Authorization").status(200).json({
        success: true, message: "User logged out successfully"
    })
}

export async function sendVerificationEmail(req: Request, res: Response): Promise<void> {
    const { email } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            res.status(404).json({
                success: false,
                message: "User does not exist",
            });
            return;
        }
        if (existingUser.verified) {
            res.status(400).json({
                success: false,
                message: "User is already verified",
            });
            return;
        }
        const codeValue = Math.floor(Math.random() * 1000000).toString();

        let info = await transport.sendMail({
            from: process.env.NODE_CODE_SENDING_EMAIL,
            to: existingUser.email,
            subject: "Email Verification Code",
            html: `<h1>Your email verification code is ${codeValue}</h1>`,
        })
        if (info.accepted[0] === existingUser.email) {

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}