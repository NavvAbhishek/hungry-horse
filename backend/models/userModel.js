import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, requird: true },
    email: { type: String, requird: true, unique: true },
    password: { type: String, requird: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);

const userModel = mongoose.models.users || mongoose.model("users", userSchema);
export default userModel
