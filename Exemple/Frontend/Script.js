document.getElementById("button").addEventListener("click", getBooks);

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
        .then((data) => {
            console.log(data);
        });
}
