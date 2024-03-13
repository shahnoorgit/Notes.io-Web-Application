import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import NotesCon from "../Components/NotesCon";
import Search from "../Components/Search";

import useFetchNotes from "../Hooks/useFetchNotes";

const Home = () => {
  const { FetchNotes, Loading } = useFetchNotes();
  useEffect(() => {
    FetchNotes();
  }, []);

  return (
    <>
      <div className=" text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <Search />
          {Loading ? (
            <span className="  mt-60 loading loading-bars loading-lg" />
          ) : (
            <NotesCon />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
