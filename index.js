// implement your API here
const express = require("express");
const db = require("./data/db.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Sup! :(");
});

server.get("/users", (req, res) => {
  db.find()
    .then(ret => {
      res.status(200).send(ret);
    })
    .catch(err => {
      res.status(500).send("Error: " + err);
    });
});

server.post("/api/users", (req, res) => {
  // db.insert()
  //   res.sendStatus(200);
  res.status(200).json(req.body);
});
server.get("/hobbits", (req, res) => {
  const hobbits = [{ id: 1, name: "Samwise Gamgee" }, { id: 2, name: "Frodo" }];
  res.status(200).json(hobbits);
});

server.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});
