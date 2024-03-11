import { Link } from "react-router-dom";
import useSignUp from "../Hooks/useSignUp";
import { useState } from "react";

const Signup = () => {
  const { Loading, signUp } = useSignUp();
  const [inputs, setInputs] = useState({
    userName: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const handleSigUp = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(inputs);
    setInputs({
      userName: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-800">
      <h1 className=" text-gray-400 text-3xl mb-5">
        Register To Notes.<span className=" text-blue-600">IO</span>
      </h1>
      <div className="  p-6 max-sm:w-[80vw] md:w-[40vw] h-auto bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-600">
        <form onSubmit={(e) => handleSigUp(e)} className="mt-[-15px]">
          <div>
            <label className=" label">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              placeholder="Your Fullname"
              type="text"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>
          <div>
            <label className=" label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              placeholder="Password"
              type="password"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>
          <div>
            <label className=" label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
              type="password"
              required
              className=" input input-bordered w-full h-10"
            ></input>
          </div>
          <Link
            className=" text-sm mt-2 inline-block hover:underline hover:text-blue-600"
            to="/login"
          >
            Already have account ? Login{" "}
          </Link>
          <div>
            <button className=" btn btn-block mt-4 ">
              {Loading ? (
                <span className=" loading loading-spinner" />
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
