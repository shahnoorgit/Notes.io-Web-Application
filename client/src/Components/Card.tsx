import { FaEdit } from "react-icons/fa";

interface CardProps {
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
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
const Card = ({ note, setPage }: CardProps) => {
  return (
    <div className="card  bg-blue-800 text-white hover:bg-blue-600 cursor-pointer">
      <div className="card-body overflow-hidden">
        <h2 className="card-title">{note.title}</h2>
        <p>{note.body}</p>
        <div className="card-actions justify-end">
          <button onClick={() => setPage(true)} className="btn rounded-full">
            <FaEdit />
          </button>
        </div>
        <p>{note.createdAt}</p>
      </div>
    </div>
  );
};

export default Card;
