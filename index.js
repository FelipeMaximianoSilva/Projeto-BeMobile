import express from "express";
import path from "path";
import { routes } from "./src/routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const __dirname = path.resolve(path.dirname(""));

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

const port = 3001;

app.listen(port, () => {
  console.log(`Estou rodando dentro da port ${port}`);
});