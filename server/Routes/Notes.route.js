import express from "express";
import { createNotes, fetchNotes } from "../controllers/Notes.controller.js";

const router = express.Router();

router.post("/create", createNotes);
router.get("/fetch/:id", fetchNotes);

export default router;
