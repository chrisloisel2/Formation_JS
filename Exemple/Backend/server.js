const express = require("express");
const app = express();
const port = 4200;

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

app.get("/api/books", (req, res) => {
    console.log("GET /api/books");
    console.log("req.query", req.query);
    console.log("req.params", req.params);
    res.json(books);
});
