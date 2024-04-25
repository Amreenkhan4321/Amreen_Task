import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:false
        },
        email:{
            type:String,
            require:false
        },
        password: {
            type: String,
            require: false,
          },
          phoneNumber: {
            type: Number,
            require: false,
          },
          profile: {
            type: String,
            require: false,
          },
          otp: {
            type: Number,
            require: false,
            default:null
          },
          role: {
            type: String,
            require: false,
            default: "admin",
          },
          isActive: {
            type: Boolean,
            require: false,
            default: true,
          },
          isDeleted: {
            type: Boolean,
            require: false,
            default: false,
          },
    },
    { timestamps: true }
)

const Admin = mongoose.model("Admin",adminSchema)
export {Admin}