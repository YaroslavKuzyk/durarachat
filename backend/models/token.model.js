import mongoose from "mongoose";

const tokenModel = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
  refreshToken: { type: String, required: true },
});

export default mongoose.model("tokenModel", tokenModel);
