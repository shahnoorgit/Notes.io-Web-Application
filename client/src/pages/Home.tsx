import { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import NotesCon from "../Components/NotesCon";
import Search from "../Components/Search";
import toast from "react-hot-toast";
import { AuthUserProvider } from "../context/AuthContext";

const Home = () => {
  const [FetchedNote, setFetchedNote] = useState([{}]);
  const { authUser } = useContext(AuthUserProvider);
  const { _id } = authUser;
  const [Loading, setLoading] = useState(false);
  const FetchNotes = async (_id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/notes/fetch/${_id}`);
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }

      setFetchedNote(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    FetchNotes(_id);
  }, [setFetchedNote]);
  console.log("Home", FetchedNote);
  return (
    <>
      <div className=" text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <Search />
          {Loading ? (
            <span className="  mt-60 loading loading-bars loading-lg" />
          ) : (
            <NotesCon Data={FetchedNote} setNote={setFetchedNote} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
