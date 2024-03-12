import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import NotesCon from "../Components/NotesCon";
import Search from "../Components/Search";
import NotePage from "../Components/NotePage";
import useFetchNotes from "../Hooks/useFetchNotes";

const Home = () => {
  const [Page, setPage] = useState(false);
  const { FetchNotes } = useFetchNotes();
  useEffect(() => {
    FetchNotes();
  }, []);

  return (
    <>
      {Page ? (
        <NotePage setPage={setPage} />
      ) : (
        <div className=" text-white">
          <Navbar />
          <div className="flex flex-col items-center justify-center">
            <Search />
            <NotesCon setPage={setPage} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
