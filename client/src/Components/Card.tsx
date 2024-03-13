import { UpdateType } from "./NotesCon";

interface CardProps {
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdate: ({ body, title }: UpdateType) => void;
  note: {
    _id?: unknown;
    madeby?: unknown;
    title: string;
    body: string;
    createdAt: string;
    updatedAt?: unknown;
    __v?: unknown;
  };
}
const Card = ({ note, handleUpdate }: CardProps) => {
  return (
    <div
      className="card  bg-blue-800 text-white hover:bg-blue-600 cursor-pointer"
      onClick={() => handleUpdate(note)}
    >
      <div className="card-body overflow-hidden">
        <h2 className="card-title">{note.title}</h2>
        <p>{note.body}</p>
        <div className="card-actions justify-end"></div>
        <p>{note.createdAt}</p>
      </div>
    </div>
  );
};

export default Card;
