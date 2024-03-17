import { UpdateType } from "./NotesCon";
import { MdDeleteOutline } from "react-icons/md";

interface CardProps {
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdate: ({ body, title }: UpdateType) => void;
  note: unknown;
}
const Card = ({ note, handleUpdate }: CardProps) => {
  return (
    <div className="card  bg-blue-800 text-white hover:bg-blue-600 cursor-pointer">
      <div
        onClick={() => handleUpdate(note)}
        className="card-body overflow-hidden"
      >
        <h2 className="card-title">{note.title}</h2>
        <p>{note.body}</p>
        <p>{note.createdAt}</p>
      </div>
      <div className="card-actions justify-end top-0">
        <button className="btn btn-primary">
          <MdDeleteOutline className=" text-xl text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default Card;
