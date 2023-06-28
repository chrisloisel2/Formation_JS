const form = document.getElementById("monForm");

document.getElementById("password").addEventListener("focus", function () {
    console.log("L'élément input a reçu le focus.");
});

document.getElementById("password").addEventListener("blur", function () {
    console.log("L'élément input a perdu le focus.");
});

users = [
    {
        username: "admin",
        password: "admin",
    },
    {
        username: "user",
        password: "user",
    },
    {
        username: "john",
        password: "1234",
    },
];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2").value;

    localStorage.setItem("clefs", "valeur");
    console.log(localStorage.getItem("clefs"));

    // Récupération des valeurs des champs du formulaire
    // et validation du formulaire
});
