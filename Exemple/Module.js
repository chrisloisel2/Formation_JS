// var monMudule = (function () {
//     var private = 0;

//     function privateFunction() {
//         console.log("privateFunction");
//     }

//     return {
//         adresse: "rue de la paix",
//         whereAmI: function () {
//             console.log("vous etes a " + this.adresse);
//         },
//     };
// })();

// // -------------------------

// console.log(monMudule.adresse);
// monMudule.whereAmI();

export class Voiture {
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
