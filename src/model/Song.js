import mongoose from "mongoose";
import { recordSchema } from "./Record.js";

const songSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  song: { type: String, require: true },
  author: { type: String },
  album: { type: String },
  length: { type: String },
  record: recordSchema
}, { versionKey: false});

// first param: collection in the db
// second param: which schema
const song = mongoose.model("songs", songSchema);

export default song;