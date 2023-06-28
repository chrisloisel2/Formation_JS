const form = document.getElementById("monForm");

function validerNom(nom) {
    console.log("la validation a ete faite");
    if (!(nom.length >= 2 && nom.length <= 6)) {
        document.getElementById("erreurNom").textContent =
            "Veuillez entrer un nom valide";
    }
}

function validerPrenom(prenom) {
    return prenom.length >= 2 && prenom.length <= 50;
}

function validerEmail(email) {
    return email.length >= 2 && email.length <= 50;
}

function validerPassword(password) {
    return password.length >= 2 && password.length <= 50;
}

function validerPassword2(password2) {
    return password2.length >= 2 && password2.length <= 50;
}

document.getElementById("password").addEventListener("focus", function () {
    console.log("L'élément input a reçu le focus.");
});

document.getElementById("password").addEventListener("blur", function () {
    console.log("L'élément input a perdu le focus.");
});

document.getElementById("nom").addEventListener("change", function () {
    validerNom(this.value);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2").value;

    if (
        validerNom(nom) &&
        validerPrenom(prenom) &&
        validerEmail(email) &&
        validerPassword(password.value) &&
        validerPassword2(password2)
    ) {
        alert("Formulaire valide");
        event.target.submit();
        // post
    } else {
        alert("Formulaire invalide");
    }

    // Récupération des valeurs des champs du formulaire
    // et validation du formulaire
});
