import { useContext, useState } from "react";

import { CreateNote } from "../types/Notes";
import { NotesProvider } from "../context/NotesContext";

const useCreateNote = () => {
  const { setFetchedNotes, FetchedNotes } = useContext(NotesProvider);
  const [Loading, setLoading] = useState(false);
  const createNote = async ({ title, body, _id }: CreateNote) => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/notes/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, _id }),
      });
      const data = await res.json();
      console.log(data);
      setFetchedNotes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { Loading, createNote, FetchedNotes };
};

export default useCreateNote;
