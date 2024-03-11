import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { AuthUserProvider } from "../context/AuthContext";

interface signInType {
  userName: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}
const useSignUp = () => {
  const [Loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthUserProvider);
  const signUp = async ({
    userName,
    fullName,
    password,
    confirmPassword,
  }: signInType) => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, fullName, password, confirmPassword }),
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      setAuthUser(data);
      localStorage.setItem("chat-user", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { Loading, signUp };
};

export default useSignUp;
