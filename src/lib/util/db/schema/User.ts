import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  discordId: String,
  username: { type: String, required: true, unique: true },
  email: String,
  avatarUrl: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
