import { useContext, useState } from "react";
import { NotesProvider } from "../context/NotesContext";
import Card from "./Card";
import { IoAddCircleSharp } from "react-icons/io5";
import NotePage from "../Components/NotePage";

export interface UpdateType {
  title: string;
  body: string;
  _id?: string;
}

const NotesCon = () => {
  const [Page, setPage] = useState(false);
  const { FetchedNotes } = useContext(NotesProvider);
  const [UpdatePage, setUpdatePage] = useState({
    title: "",
    body: "",
    _id: "",
  });
  const handleUpdateNote = ({ body, title, _id }: UpdateType) => {
    setUpdatePage({ title, body, _id });
    setPage(true);
  };
  return (
    <>
      {Page ? (
        <NotePage
          updateINFO={UpdatePage}
          setUpdateInfo={setUpdatePage}
          setPage={setPage}
        />
      ) : (
        <div className="container mx-auto">
          <button onClick={() => setPage(true)} className=" cursor-pointer">
            <IoAddCircleSharp className=" fixed bottom-[5%] right-5 text-7xl z-10 text-white" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 max-sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10 max-sm:p-2">
            {" "}
            {FetchedNotes.map((note) => (
              <Card
                handleUpdate={handleUpdateNote}
                note={note}
                setPage={setPage}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NotesCon;
