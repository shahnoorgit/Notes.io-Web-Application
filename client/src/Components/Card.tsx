import { useContext, useState } from "react";
import { UpdateType } from "./NotesCon";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { AuthUserProvider } from "../context/AuthContext";

interface CardProps {
  setPage: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdate: ({ body, title }: UpdateType) => void;
  note: unknown;
  setNote: React.Dispatch<React.SetStateAction<object[]>>;
}

const Card = ({ note, handleUpdate, setNote }: CardProps) => {
  const { authUser } = useContext(AuthUserProvider);
  const { _id } = authUser;

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

  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    console.log(note);
    try {
      const res = await fetch("/api/users/notes/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
      const data = await res.json();
      if (data.error) {
        return new Error(data.error);
      }
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    FetchNotes(_id);
  };
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
        <button onClick={() => handleDelete()} className="btn btn-primary">
          <MdDeleteOutline className=" text-xl text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default Card;
