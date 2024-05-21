import mongoose from "mongoose";
import links from "./LinkModel.js"
const UserSchema = new mongoose.Schema({
    // _id: Number,
    name: String,
    email: String,
    password: String,
    links: [mongoose.Schema.Types.ObjectId],
  });

export default mongoose.model("users", UserSchema);
