import express from "express";
import path from "path";
import router from "./src/router/mainRouter.js";

const server = express();
const port = 3000;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/static", express.static(path.join("static")));

server.use(router);

server.use(express.static(path.join("views")));

server.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "views") });
});
server.get("/form", (req, res) => {
  res.sendFile("form.html", { root: path.join("views") });
});
server.get("/thankyou", (req, res) => {
  res.sendFile("thankyou.html", { root: path.join("views") });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
