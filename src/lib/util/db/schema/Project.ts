import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  hashtags: [{ type: String, trim: true }],
  description: { type: String, required: true, trim: true, minLength: 2 },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  author: String,
  createdAt: { type: Date, required: true, default: Date.now },
});

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
