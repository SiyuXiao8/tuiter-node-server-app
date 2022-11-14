import express from 'express';
import cors from 'cors';
const app = express()
import HelloController from "./controllers/hello-controller.js";
import usersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

app.use(cors());
app.use(express.json());

TuitsController(app);

HelloController(app);
usersController(app);

app.listen(4000 || process.env.PORT);