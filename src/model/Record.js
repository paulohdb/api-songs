import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  nationality: { type: String }
}, { versionKey: false });

const record = mongoose.model("record", recordSchema);

export { record, recordSchema };