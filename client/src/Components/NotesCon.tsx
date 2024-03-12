import { useContext } from "react";
import { NotesProvider } from "../context/NotesContext";
import Card from "./Card";
import { IoAddCircleSharp } from "react-icons/io5";

interface NoteConProps {
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const NotesCon = ({ setPage }: NoteConProps) => {
  const { FetchedNotes } = useContext(NotesProvider);
  return (
    <div className="container mx-auto">
      <button onClick={() => setPage(true)} className=" cursor-pointer">
        <IoAddCircleSharp className=" fixed bottom-[5%] right-5 text-7xl z-10 text-white" />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 max-sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10 max-sm:p-2">
        {" "}
        {FetchedNotes.map((note) => (
          <Card note={note} setPage={setPage} />
        ))}
      </div>
    </div>
  );
};

export default NotesCon;
