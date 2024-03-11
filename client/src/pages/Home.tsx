import Navbar from "../Components/Navbar";
import NotesCon from "../Components/NotesCon";
import Search from "../Components/Search";
const Home = () => {
  return (
    <div className=" text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Search />
        <NotesCon />
      </div>
    </div>
  );
};

export default Home;
