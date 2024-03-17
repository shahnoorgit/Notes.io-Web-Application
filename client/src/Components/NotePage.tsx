import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineDoneOutline } from "react-icons/md";

import { UpdateType } from "./NotesCon";
import { CreateNote } from "../types/Notes";

interface NotePageProps {
  updateINFO: UpdateType;
  setNote: React.Dispatch<React.SetStateAction<object[]>>;
  setUpdateInfo: (
    value: React.SetStateAction<{
      title: string;
      body: string;
      _id: string;
    }>
  ) => void;
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const NotePage = ({
  setPage,
  updateINFO,
  setUpdateInfo,
  setNote,
}: NotePageProps) => {
  const close = () => {
    setUpdateInfo({ title: "", body: "", _id: "" });
    setPage(false);
  };

  const AddNew = () => {
    const createNote = async ({ title, body, _id }: CreateNote) => {
      try {
        const res = await fetch("/api/users/notes/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, body, _id }),
        });
        const data = await res.json();
        console.log(data);
        setNote((prevNotes) => [data, ...prevNotes]);
      } catch (error) {
        console.log(error);
      }
    };
    createNote(updateINFO);
    setUpdateInfo({ title: "", body: "", _id: "" });
    close();
  };
  return (
    <div className="bg-gray-900 p-10 w-screen h-full top-0 absolute flex flex-col">
      <div className=" flex items-center justify-between mt-2 px-10">
        <button onClick={() => close()}>
          <IoMdArrowRoundBack className=" text-3xl" />
        </button>
        <button onClick={() => AddNew()}>
          <MdOutlineDoneOutline className=" text-3xl" />
          Done
        </button>
      </div>
      <div className=" divider" />
      <form className="flex flex-col gap-5">
        <div>
          <input
            value={updateINFO.title}
            onChange={(e) =>
              setUpdateInfo({ ...updateINFO, title: e.target.value })
            }
            placeholder="Enter Title"
            type="text"
            required
            className=" input border-none w-full h-10"
          ></input>
        </div>
        <div>
          <textarea
            value={updateINFO.body}
            onChange={(e) =>
              setUpdateInfo({ ...updateINFO, body: e.target.value })
            }
            placeholder=""
            required
            className=" input input-bordered w-full h-[60vh] "
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default NotePage;
