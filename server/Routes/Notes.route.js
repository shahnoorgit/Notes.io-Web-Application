import express from "express";
import {
  DeleteNoteById,
  UpdateNotes,
  createNotes,
  fetchNotes,
} from "../controllers/Notes.controller.js";

const router = express.Router();

router.post("/create", createNotes);
router.get("/fetch/:id", fetchNotes);
router.post("/delete", DeleteNoteById);
router.post("/update", UpdateNotes);

export default router;
