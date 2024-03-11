import { useContext, useState } from "react";
import { AuthUserProvider } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [Loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useContext(AuthUserProvider);
  console.log(authUser);
  const login = async (userName: string, password: string) => {
    try {
      setLoading(true);
      const res = await fetch("/api/users/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { Loading, login };
};

export default useLogin;
