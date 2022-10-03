const express = require("express");
const app = express();
const errorHandler = require("./src/middleware/errorHandler");
const verifyToken = require("./src/middleware/verifyToken");
const cors = require("cors");

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// IMPORT ROUTES
const userRouter = require("./src/routes/user");
const workoutRouter = require("./src/routes/workout");
const exerciseRouter = require("./src/routes/exercise");
const noteRouter = require("./src/routes/note");
const weightRouter = require("./src/routes/weight");
const authRouter = require("./src/routes/auth");

// ROUTES MIDDLEWARE
app.use("/user", verifyToken, userRouter);
app.use("/workout", verifyToken, workoutRouter);
app.use("/exercise", verifyToken, exerciseRouter);
app.use("/note", verifyToken, noteRouter);
app.use("/weight", verifyToken, weightRouter);
app.use("/auth", authRouter);

app.use(errorHandler);

// START UP
app.listen(process.env.PORT || 4000, () => {
  console.log(`The API server is running`);
});
