import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Signup, Login } from "./pages/index";
import { Toaster } from "react-hot-toast";
import { AuthUserProvider } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { authUser } = useContext(AuthUserProvider);
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser?._id.length > 1 ? <Home /> : <Navigate to={"/sign-up"} />
          }
        />
        <Route
          path="/sign-up"
          element={authUser._id.length > 1 ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/login"
          element={authUser._id.length > 1 ? <Navigate to={"/"} /> : <Login />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
