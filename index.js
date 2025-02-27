const express = require("express");

const { connectMongoDb } = require("./connection");

const userRouter = require("./routes/user");

const { logReqRes } = require("./middlewares");

const app = express();
const PORT = 8000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");

app.use(express.urlencoded({ extended: false }));

//log
app.use(logReqRes("log.txt"));

// routes
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log("Server Started @ PORT 8000"));
