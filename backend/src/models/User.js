import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    fullName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
    profilePic:{
        type: String,
        default: "",
    },

}, { timestamps: true } //used for member since or created account on...
);


const User = mongoose.model("User", userSchema);
export default User;