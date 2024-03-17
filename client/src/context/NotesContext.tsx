import React, { createContext, useState } from "react";
import { fetchedNotesType } from "../types/Notes";

interface Context {
  FetchedNotes: fetchedNotesType;
  setFetchedNotes: React.Dispatch<React.SetStateAction<fetchedNotesType>>;
}
interface NotesContextProps {
  children: React.ReactNode;
}

export const NotesProvider = createContext<Context>({
  FetchedNotes: [
    {
      _id: "",
      title: "",
      body: "",
      createdAt: "",
    },
  ],
  setFetchedNotes: () => {},
});
export const NotesContext = ({ children }: NotesContextProps) => {
  const [FetchedNotes, setFetchedNotes] = useState<fetchedNotesType>([
    {
      _id: "",
      title: "",
      body: "",
      createdAt: "",
    },
  ]);
  return (
    <NotesProvider.Provider value={{ FetchedNotes, setFetchedNotes }}>
      {children}
    </NotesProvider.Provider>
  );
};

export default NotesContext;
