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

class Limousine extends Voiture {
    constructor(marque, modele, couleur, annee, longueur) {
        super(marque, modele, couleur, annee);
        this.longueur = longueur;
    }
    rouler() {}

    FaireUnTruc(x) {
        console.log(x(this));
    }
}

const voiture1 = new Voiture("Peugeot", "208", "rouge", "2018");
const voiture2 = new Limousine("Peugeot", "208", "rouge", "2018", 10);

console.log(voiture1);
console.log(voiture2);

// -------------------------

// Appel de fonction en parametre

function mafonction(x) {
    console.log("print la voiture :" + x);
}

voiture2.FaireUnTruc(mafonction);

// -------------------------

// Fonction anonyme
voiture2.FaireUnTruc(function (x) {
    console.log("print la voiture :" + x);
});

// -------------------------

// Fonction flechee => (lambda)
voiture2.FaireUnTruc((x) => x + 5);

// x est le parametre de la fonction flechee
// a droite de la flechee => on a le corps de la fonction

// -------------------------

voiture1.rouler();
voiture2.accelerer();
voiture2.freiner();
voiture2.rouler();

Voiture.test = function (a) {
    this.couleur = a;
};
