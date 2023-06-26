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

let voiture1 = new Voiture("Peugeot", "208", "rouge", "2018");
let voiture2 = new Voiture("Peugeot", "308", "bleu", "2019");
let voiture3 = new Voiture("Peugeot", "508", "blanc", "2020");

console.log(voiture1);
console.log(voiture2);
console.log(voiture3);

voiture1.rouler();
voiture2.accelerer();
voiture3.freiner();
