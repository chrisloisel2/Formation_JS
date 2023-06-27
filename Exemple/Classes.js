export class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name);
    }
}

export class UtilisateurDuMagasinDuMardi extends User {
    constructor(name) {
        super(name);
    }
    sayHi() {
        super.sayHi();
        alert(`UtilisateurDuMagasinDuMardi ${this.name}`);
    }
}

class Admin extends User {
    sayHi() {
        super.sayHi();
        alert(`Admin ${this.name}`);
    }
}

class Voiture {
    static #serialNumber = 0; // definition de la propriete statique => de classe privee
    constructor(
        marque = "Renaud",
        modele = "clio",
        couleur = "noir",
        annee = "2012"
    ) {
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.annee = annee;
        this.serialNumber = Voiture.#serialNumber++;
    }

    rouler() {
        console.log("La voiture roule");
        console.log("La voiture " + this.serialNumber + " roule");
        console.log("La voiture " + Voiture.#serialNumber + " roule");
    }

    accelerer() {
        console.log("La voiture accelere");
    }

    freiner() {
        console.log("La voiture freine");
    }
}
