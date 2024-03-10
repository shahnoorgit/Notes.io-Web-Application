import mongoose from "mongoose";

const Noteschema = new mongoose.Schema(
  {
    madeby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Notes = mongoose.model("Notes", Noteschema);

export default Notes;
