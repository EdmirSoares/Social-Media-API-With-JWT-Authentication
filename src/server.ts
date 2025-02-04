import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import authRouter from './routers/authRouter';

const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoURI: string = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

mongoose.connect(mongoURI).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Error connecting to the database');
    console.log(error);
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});