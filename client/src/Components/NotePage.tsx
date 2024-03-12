import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineDoneOutline } from "react-icons/md";

interface NotePageProps {
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const NotePage = ({ setPage }: NotePageProps) => {
  return (
    <div className=" flex flex-col">
      <div className=" flex items-center justify-between mt-2 px-10">
        <button onClick={() => setPage(false)}>
          <IoMdArrowRoundBack className=" text-3xl" />
        </button>
        <button>
          <MdOutlineDoneOutline className=" text-3xl" />
          Done
        </button>
      </div>
      <div className=" divider" />
      <form className="flex flex-col">
        <div>
          <input
            placeholder="title"
            type="text"
            required
            className=" input input-bordered w-full h-10"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default NotePage;
