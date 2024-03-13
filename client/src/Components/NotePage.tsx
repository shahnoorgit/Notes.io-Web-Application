import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineDoneOutline } from "react-icons/md";

import { UpdateType } from "./NotesCon";
interface NotePageProps {
  updateINFO: UpdateType;
  setUpdateInfo: (
    value: React.SetStateAction<{
      title: string;
      body: string;
      _id?: string;
    }>
  ) => void;
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const NotePage = ({ setPage, updateINFO, setUpdateInfo }: NotePageProps) => {
  const close = () => {
    setUpdateInfo({ title: "", body: "" });
    setPage(false);
  };
  return (
    <div className="bg-gray-900 p-10 w-screen h-full top-0 absolute flex flex-col">
      <div className=" flex items-center justify-between mt-2 px-10">
        <button onClick={() => close()}>
          <IoMdArrowRoundBack className=" text-3xl" />
        </button>
        <button>
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
