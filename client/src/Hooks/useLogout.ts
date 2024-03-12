import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { AuthUserProvider } from "../context/AuthContext";

const useLogout = () => {
  const { setAuthUser } = useContext(AuthUserProvider);
  const [Loading, setLoading] = useState(false);
  const Logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/auth/logout");
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser({
        _id: "",
        FullName: "",
        userName: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { Loading, Logout };
};

export default useLogout;
