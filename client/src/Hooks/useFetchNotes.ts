import { useContext, useState } from "react";
import { AuthUserProvider } from "../context/AuthContext";

import toast from "react-hot-toast";
import { NotesProvider } from "../context/NotesContext";

const useFetchNotes = () => {
  const { setFetchedNotes } = useContext(NotesProvider);
  const { authUser } = useContext(AuthUserProvider);
  const { _id } = authUser;
  const [Loading, setLoading] = useState(false);
  const FetchNotes = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/notes/fetch/${_id}`);
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      setFetchedNotes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { Loading, FetchNotes };
};

export default useFetchNotes;
