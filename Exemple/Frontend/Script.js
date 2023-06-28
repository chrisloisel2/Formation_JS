document.getElementById("button").addEventListener("click", function () {
    fetch("http://localhost:5555/api/books")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
    // asynchronous
});
