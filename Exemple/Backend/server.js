const express = require("express"); // Import express
const cors = require("cors"); // Import cors
const ws = require("ws"); // Import ws
const WebSocket = require("ws");
const app = express(); // Create express app
const port = 5555; // definir le port d'écoute

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
    console.log("New client connected");

    ws.on("message", function incoming(message) {
        console.log("received: %s", message);
        ws.send("le message a ete recu");
    });
});

app.use(cors()); // Use cors

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

books = [
    {
        id: 1,
        title: "Harry Potter and the Sorcerer's stone",
        author: "J.K. Rowling",
        year: 1997,
    },
    {
        id: 2,
        title: "Jurassic Park",
        author: "Michael Crichton",
        year: 1990,
    },
    {
        id: 3,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
    },
];

// GET
// PUT
// POST
// DELETE

app.get("/api/books", (req, res) => {
    console.log("GET /api/books");
    res.json(books);
});
