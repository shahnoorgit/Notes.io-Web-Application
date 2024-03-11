import { MdLogout } from "react-icons/md";
import useLogout from "../Hooks/useLogout";
const Navbar = () => {
  const { Loading, Logout } = useLogout();
  return (
    <div className=" flex items-center justify-around w-full h-[10vh] bg-gray-800">
      <span className=" text-white text-3xl ml-2">
        Notes.<span className=" text-blue-700 text-3xl">IO</span>
      </span>
      <button onClick={() => Logout()} className=" flex gap-3">
        <MdLogout className=" text-3xl" />{" "}
        <span className="max-sm:hidden text-xl">
          {Loading ? <span className=" loading loading-spinner" /> : "Logout"}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
