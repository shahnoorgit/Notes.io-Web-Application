import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineDoneOutline } from "react-icons/md";

import { UpdateType } from "./NotesCon";
import { CreateNote } from "../types/Notes";
import { useContext } from "react";
import { AuthUserProvider } from "../context/AuthContext";
import toast from "react-hot-toast";

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
  const { authUser } = useContext(AuthUserProvider);

  const close = () => {
    setUpdateInfo((prevInfo) => ({
      ...prevInfo,
      title: "", // Blank title
      body: "",
      _id: " ", // Blank body
    }));
    setPage(false);
  };

  const AddNew = () => {
    console.log(updateINFO._id);
    console.log("iddd");
    const FetchNotes = async (_id: string) => {
      try {
        const res = await fetch(`/api/users/notes/fetch/${_id}`);
        const data = await res.json();
        if (data.error) {
          toast.error(data.error);
          throw new Error(data.error);
        }

        setNote(data);
      } catch (error) {
        console.log(error);
      }
    };
    const createNote = async ({ title, body, _id }: CreateNote) => {
      try {
        const res = await fetch("/api/users/notes/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, body, _id }),
        });
        const data = await res.json();
        console.log("fetchedData", data);
        setNote((prevNotes) => [data, ...prevNotes]);
        console.log("ID", data);
      } catch (error) {
        console.log(error);
      }
    };

    const UpdateNote = async ({ title, body, _id }: CreateNote) => {
      try {
        const res = await fetch("/api/users/notes/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, body, _id }),
        });
        const data = await res.json();
        console.log("fetchedData", data);
        setNote((prevNotes) => [data, ...prevNotes]);
        console.log("ID", data);
      } catch (error) {
        console.log(error);
      }
    };
    if (updateINFO._id == " ") {
      UpdateNote(updateINFO);
      console.log("up");
    } else {
      createNote(updateINFO);
      console.log("Create");
    }

    close();
  };
  console.log(updateINFO);
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
