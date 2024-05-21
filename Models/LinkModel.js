import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
    // _id: Number,
    originalUrl: String,
});

export default mongoose.model("links", LinkSchema);
