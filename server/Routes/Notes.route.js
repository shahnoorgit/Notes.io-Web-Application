import express from "express";
import {
  DeleteNoteById,
  createNotes,
  fetchNotes,
} from "../controllers/Notes.controller.js";

const router = express.Router();

router.post("/create", createNotes);
router.get("/fetch/:id", fetchNotes);
router.post("/delete", DeleteNoteById);

export default router;
