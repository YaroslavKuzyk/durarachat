import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  avatar: { type: String, required: false },
});

export default mongoose.model("UserModel", UserModel);
