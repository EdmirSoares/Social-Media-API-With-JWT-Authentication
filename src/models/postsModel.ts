import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        trim: true,
        minLength: [5, "Title must be at least 5 characters long"],
        maxLength: [65, "Title must be at most 100 characters long"]    
    },
    description:{
        type: String,
        required: [true, "Description is required"],
        trim: true,
        minLength: [5, "Description must be at least 5 characters long"],
        maxLength: [600, "Title must be at most 100 characters long"]    
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
},{
    timestamps: true
});

export default mongoose.model("Post", postSchema);