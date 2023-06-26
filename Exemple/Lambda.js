function nom(arg1, arg2) {
    return arg1 + arg2;
}

// supprimer le mot clé function + nom
// Ajouter un fat arrow => entre les parametres et le corps de la fonction

(arg1, arg2) => {
    return arg1 + arg2;
};

// Si le corps de la fonction ne contient qu'une seule instruction, on peut supprimer les accolades et le return
// si le corps de la fonction ne contient qu'un seul parametre, on peut supprimer les parenthèses

class user {
    constructor(nom, prenom, age, status = false) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.status = status;
    }
}

class ListUser {
    constructor(liste) {
        this.liste = liste;
    }

    get(x) {
        let result = [];
        for (let i = 0; i < this.liste.length; i++) {
            if (x(this.liste[i])) {
                result.push(this.liste[i]);
            }
        }
        return result;
    }
}

let liste = [
    new user("ponpon", "Jean", 2, true),
    new user("Dupdup", "lionel", 15, false),
    new user("Duper", "christopher", 25, true),
    new user("Dupont", "Michel", 35, false),
    new user("Dupont", "Josef", 35, true),
    new user("Dupont", "Michel", 55, false),
    new user("Cupont", "Dosef", 65, true),
    new user("fupont", "Michel", 35, false),
    new user("Cupont", "Josef", 45, false),
    new user("Dupont", "Michel", 35, true),
    new user("Cupont", "Vosef", 35, true),
    new user("Dupont", "Michel", 35, true),
];

const list = new ListUser(liste);

list.get((x) => x.status).forEach((x) => console.log(x));

console.log(liste);

// afficher les utilisateurs de plus de 18 ans, dont le nom commence par D, triés par age decroissant

// 1. filtrer les utilisateurs de plus de 18 ans

x = liste.filter((user) => user.age > 18);

console.log(x);

// 2. filtrer les utilisateurs dont le nom commence par D

x = x.filter((user) => user.nom[0] == "D");

console.log(x);

// 3. trier les utilisateurs par age decroissant

x = x.sort((a, b) => b.age - a.age);

console.log(x);

liste
    .filter((user) => user.age > 18)
    .filter((user) => user.nom[0] == "D")
    .sort((a, b) => b.age - a.age)
    .forEach((user) => console.log(user));
