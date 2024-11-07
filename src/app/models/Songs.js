import mongoose, { Schema } from "mongoose";
const songsSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
});

const Songs = mongoose.models.Songs || mongoose.model("Songs", productSchema);

export default Songs;
