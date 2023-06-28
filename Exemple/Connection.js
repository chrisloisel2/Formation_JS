const form = document.getElementById("monForm");

users = localStorage.getItem("users");

if (users) {
    users = JSON.parse(users);
} else {
    users = [];
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    if (
        users.find(
            (user) => username === user.username && password === user.password
        )
    ) {
        alert("Vous êtes connecté");
    } else {
        alert("Erreur de connexion");
    }
});
