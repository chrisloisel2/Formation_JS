document.getElementById("button").addEventListener("click", connection);
document.getElementById("button2").addEventListener("click", postMessage);

function getBooks() {
    fetch("http://82.165.127.44/users", {
        methode: "GET",
        headers: {
            "Content-Type": "application/json",
            "ACCESS-CONTROL-ALLOW-ORIGIN": "http://localhost:5555",
        },
    })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
}

function connection() {
    ws = new WebSocket("ws://localhost:8080");

    ws.onopen = function () {
        console.log("Connection opened");
        ws.send("Hello Server");
    };

    ws.onmessage = function (e) {
        console.log(e.data);
    };
}

function postMessage() {
    ws.send("Hello Server");
}
