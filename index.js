const express = require("express");
// const md5 = require("md5");
// const nodemailer = require('nodemailer');
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
// const User = require("./models/userModel");
// const Otp = require("./models/otpModel");
// const generateToken = require("./config/generateToken");
// const verifyToken = require("./middleware/verifyToken.js");


dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data

app.use("/api", userRoutes);

// // Initialize Nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'akshatsoni450@gmail.com',
//     pass: process.env.EMAIL_PASS,
//   },
// });


// app.post("/register", async(req, res) =>{
//     try{
//         const { email, password } = req.body;

//         // Check if user already exists
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ message: 'User already exists' });
//         }


//         // Generate OTP
//         const otpCode = Math.floor(1000 + Math.random() * 9000);

//         // Create new user
//         user = new User({email : email, password: md5(password)});

//         const savedUser = await user.save();

//         // Save OTP with user ID
//         const otp = new Otp({
//             userId: savedUser._id,
//             otp: otpCode,
//         });

//         await otp.save();

//         // Send OTP to email
//         const mailOptions = {
//         from: 'akshatsoni450@gmail.com',
//         to: email,
//         subject: 'OTP Verification',
//         text: `Your OTP is ${otpCode}`,
//         };

//         await transporter.sendMail(mailOptions);

//         res.json({
//         message: 'OTP sent to email for verification',
//         user: {
//             id: savedUser._id,
//             email: savedUser.email,
//             age: savedUser.age,
//             location: savedUser.location,
//             workDetails: savedUser.workDetails,
//         },
//         });

//     } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Server error' });
//   }

// });

// app.post("/verify-otp", async (req, res) => {
//     try {
//         const { userId, otp } = req.body;

//         // Find the user by userId
//         const user = await User.findById(userId);

//         // Check if the user exists
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Find the OTP record by userId
//         const otpRecord = await Otp.findOne({ userId });

//         // Check if OTP record exists
//         if (!otpRecord) {
//             return res.status(400).json({ message: 'OTP not found' });
//         }

//         // Check if the provided OTP matches the saved OTP
//         if (otp != otpRecord.otp) {
//             return res.status(400).json({ message: 'Invalid OTP' });
//         }

//         // Mark the user as verified
//         user.isVerified = true;
//         await user.save();

//         res.json({ message: 'OTP verified successfully', user: user });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });










// app.post("/addDetails", async (req, res) => {
//     try {
//         const { userId, age, location, workDetails } = req.body;

//         // Find the user by userId
//         const user = await User.findById(userId);

//         // Check if the user exists
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Check if the user is verified
//         if (!user.isVerified) {
//             return res.status(400).json({ message: 'User is not verified' });
//         }

//         // Update user details
//         user.age = age;
//         user.location = location;
//         user.workDetails = workDetails;

//         await user.save();

//         res.json({ message: 'User details updated successfully', user: user });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });


// app.post("/login", async(req, res) => {
//     try{
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });

//         if (user && user.password === md5(password)) {
//             res.json({
//             _id: user._id,
//             email: user.email,
//             isVerified : user.isVerified,
//             age : user.age,
//             location: user.location,
//             workDetails : user.workDetails,
//             token: generateToken(user._id),
//             });
//         } else {
//             res.status(401).json({ message: 'Incorrect emial or password' });
//         }
//     } catch(err){
//         console.log(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// });



// app.get("/", verifyToken, async(req, res) =>{
//     try {
//         // Extract user ID from the token or request
//         const userId = req.user._id; // Assuming you've set userId in the verifyToken middleware

//         // Fetch user details from the database
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.status(201).json({
//             _id: user._id,
//             email: user.email,
//             isVerified : user.isVerified,
//             age : user.age,
//             location: user.location,
//             workDetails : user.workDetails
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// })


const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);