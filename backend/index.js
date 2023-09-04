import express from "express";
import bodyParser from 'body-parser';
// import session from 'express-session';
// import passport from 'passport';
// import LocalStrategy from 'passport-local';
import dotenv from "dotenv";
import cors from "cors";
import database from "./config/db.js"
import userRouter from "./routes/user/user.js";


dotenv.config();
const app = express();

app.use(express.json())

const PORT = 4000 || 8000


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.listen(PORT, async () =>{
    await database()
    console.log(`Server Started ${PORT}`)
})

app.use(cors({
    origin : "http://127.0.0.1:5173/",
    methods: ["GET", "POST"],
      origin : true,
      credentials: true,
  })
)


app.use("/user" ,userRouter)