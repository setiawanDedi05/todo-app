import express, { Response } from "express";
import cors from "cors";
import { TodoRepositoryImpl } from "./repositories/todo-repository";
import prisma from "./utils/db";
import { TodoServiceImpl } from "./services/todo-service";
import { TodoControllerImpl } from "./controllers/todo-controller";
import { todoRoutes } from "./routes/todo-route";
require("dotenv").config();

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

const todoRepository = new TodoRepositoryImpl(prisma);
const todoService = new TodoServiceImpl(todoRepository);
const todoController = new TodoControllerImpl(todoService);

app.use("/api/v1/todos", todoRoutes(todoController));

app.get("/", (_, res: Response) => {
  res.send("To-do List");
});

app.listen(port, () => {
  console.log("Yeay, I'm live, on planet D3D1-" + port);
});
