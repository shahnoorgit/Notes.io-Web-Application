import { useContext, useState } from "react";
import Card from "./Card";
import { IoAddCircleSharp } from "react-icons/io5";
import NotePage from "../Components/NotePage";
import { AuthUserProvider } from "../context/AuthContext";

export interface UpdateType {
  title: string;
  body: string;
  _id: string;
}

interface NotesPageProp {
  Data: unknown[];
  setNote: React.Dispatch<React.SetStateAction<object[]>>;
}

const NotesCon = ({ Data, setNote }: NotesPageProp) => {
  const [Page, setPage] = useState(false);
  console.log(Data);
  const { authUser } = useContext(AuthUserProvider);
  const [UpdatePage, setUpdatePage] = useState({
    title: "",
    body: "",
    _id: authUser._id,
  });
  const handleUpdateNote = ({ body, title, _id }: UpdateType) => {
    setUpdatePage({ title, body, _id });
    setPage(true);
  };

  return (
    <>
      {Page ? (
        <NotePage
          setNote={setNote}
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
            {Data.map((note) => (
              <Card
                handleUpdate={handleUpdateNote}
                note={note}
                setPage={setPage}
              />
            ))}
            {Data.length === 0 && (
              <h1 className=" absolute m-[52px]">
                You Currently Dont Have Any Notes Please Click The + Icon To
                Make a New note
              </h1>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NotesCon;
