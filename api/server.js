const express = require("express");

const server = express();

const usersRouter = require("./users/users-router");
const videosRouter = require("./videos/videos-router");
const headshotsRouter = require("./images/headshots/headshots-router");
const onsetRouter = require("./images/onset/onset-router");
const onstageRouter = require("./images/onstage/onstage-router");

const cors = require("cors");

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    optionSuccessStatus: 200,
  };

const helmet = require("helmet");

server.use(cors(corsOptions));
server.use(helmet());

server.use(express.json());
server.use("/api/users", usersRouter);
server.use("/api/videos", videosRouter);
server.use("/api/headshots", headshotsRouter);
server.use("/api/onset", onsetRouter);
server.use("/api/onstage", onstageRouter);

server.get("/", (req, res) => {
    res.status(200).send("API runniiiiing")
});

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message})
});

module.exports = server;
