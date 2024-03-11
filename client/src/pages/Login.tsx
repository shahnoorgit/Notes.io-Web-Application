import { Link } from "react-router-dom";
import useLogin from "../Hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const { login, Loading } = useLogin();

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(userName, password);
    setPassword("");
    setUserName("");
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-800">
      <h1 className=" text-gray-400 text-3xl mb-5">
        Login To Notes.<span className=" text-blue-600">IO</span>
      </h1>
      <div className=" p-6 max-sm:w-[80vw] md:w-[40vw] h-auto bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-600">
        <form onSubmit={(e) => handleLogin(e)} className="mt-[-15px]">
          <div>
            <label className=" label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your Username"
              type="text"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>
          <div>
            <label className=" label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>

          <Link
            className=" text-sm mt-2 inline-block hover:underline hover:text-blue-600"
            to="/sign-up"
          >
            Don't have account ? Register First{" "}
          </Link>
          <div>
            <button className=" btn btn-block mt-4 ">
              {Loading ? (
                <span className=" loading loading-spinner" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
