const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello world from router");
}); 

// registeration validation
router.post('/register', async (req, res) => {
  
  const { name, email, phone, profession, password, cpassword } = req.body;
  console.log('in register body');
  if (!name || !email || !phone || !profession || !password || !cpassword) {
    console.log('please fill all the fields')
    return res.status(422).json({ error: "please fill the all fields!!!" });

  }
  try {
    console.log('checking email');
    const userExits = await User.findOne({ email: email });
    if (userExits) {
      return res.status(422).json({ error: "User already Exists!!!" });
    }

    const user = new User({ name, email, phone, profession, password, cpassword });

    await user.save();
    
    res.status(201).json({ message: "user registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

// Login validation
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password || !email) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    // email check
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      return res.status(400).json({ error: "Invalid Credentials!!!" });}
    const isMatch = await bcrypt.compare(password , userLogin.password)
    const token =await userLogin.generateAuthToken(); 
    console.log(token);
    
    // password check

    if (!isMatch) {
      res.status(400).json({ error: "Invalid Credentials!!!" });
    } else {
      res.status(200).json({ message: "user logged in successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
