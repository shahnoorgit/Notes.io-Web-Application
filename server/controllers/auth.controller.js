import User from "../Model/auth.model.js";
import bcrypt from "bcrypt";
import generateTokenandsetCookie from "../utils/jwt.token.js";

export const signup = async (req, res) => {
  const { userName, fullName, password, confirmPassword } = req.body;
  const user = await User.findOne({ userName });
  if (user) {
    return res.status(400).json({ error: "user already exists" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "password must be longer then 6 words" });
  }
  if (password != confirmPassword) {
    return res.status(400).json({ error: "incorrect confirmPassword" });
  }
  const salt = await bcrypt.genSalt(5);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    fullName,
    userName,
    password: hashedPassword,
    confirmPassword: hashedPassword,
  });

  if (newUser) {
    generateTokenandsetCookie(newUser._id, res);
    newUser
      .save()
      .then((user) => {
        console.log("user created at DB");
      })
      .catch((error) => {
        console.log("error");
      });
    res.status(200).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
    });
  }
};

export const login = async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
  if (!user) {
    return res
      .status(400)
      .json({ error: "username not found please register first" });
  }
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    return res.status(200).json({ error: "incorrect Password" });
  }

  if (user && isPassword) {
    generateTokenandsetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      userName: user.userName,
      fullName: user.fullName,
    });
  }
};

export const logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "user logged out succesfully" });
};
