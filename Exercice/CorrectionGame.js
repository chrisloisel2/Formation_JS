class Village {
    constructor(declencherTimer) {
        this.nbJours = 1;
        this.idBuilding = 1;
        this.listeBuilding = Array();
        this.intervalVillage = null;
        if (declencherTimer) {
            console.log(`declencherTimer à partir de ${this.nbJours}`);
            this.tempsQuiPasse();
        }
    }
    hookTemps() {
        console.log(">" + this.nbJours);
        if (this.nbJours > 5) {
            this.pauseTemps();
        }
    }

    tempsQuiPasse() {
        console.log(`tempsQuiPasse à partir de ${this.nbJours}`);
        this.intervalVillage = setInterval(() => {
            console.log(this.nbJours);
            this.nbJours++;
            this.hookTemps();
        }, 500);
    }

    // Dans cette version corrigée, j'ai utilisé une fonction fléchée pour la callback de setInterval afin de conserver le contexte approprié pour this

    pauseTemps() {
        clearInterval(this.intervalVillage);
        this.intervalVillage = null;
    }

    repriseTemps() {
        //console.log(nbJours);
        this.tempsQuiPasse();
    }

    ajouterBuildingAuVillage(building) {
        this.listeBuilding.push(building);
        building.jourDeCreation = this.nbJours;
        building.idBuilding = this.idBuilding;
        this.idBuilding++;
    }

    retirerBuildingDuVillage(building) {
        this.listeBuilding = this.listeBuilding.filter(
            (buildingItem) => buildingItem.idBuilding != building.idBuilding
        );
    }
}

class Building {
    constructor(nom = "", ressourceProduite = "", rendementParJour = 0) {
        this.nom = nom;
        this.ressourceProduite = ressourceProduite;
        this.rendementParJour = rendementParJour;
        this.jourDeCreation = 0;
        this.idBuilding = 0;
    }

    getNom() {
        return this.nom;
    }
}

class HotelDeVille extends Building {
    constructor(nom = "") {
        super(nom, "Services Administratifs", 100);
    }
}

class Caserne extends Building {
    constructor(nom = "") {
        super(nom, "Interventions", 10);
    }
}

class ProductionBuilding extends Building {
    constructor(nom, production, rendementParJour, typeRessourceProduite) {
        super(nom, production, rendementParJour);
        this.typeRessourceProduite = typeRessourceProduite;
    }
}

class Scierie extends ProductionBuilding {
    constructor(nom = "") {
        super(nom, "Production", 1000, "m3 de bois");
    }
}

class Mine extends ProductionBuilding {
    constructor(nom = "") {
        super(nom, "Production", 3000, "m3 de charbon");
    }
}

//----------------

const monVillage = new Village(true);
const maMairie = new HotelDeVille("MaMairie");
const casernePompiers = new Caserne("Caserne Pompiers");

setTimeout(function () {
    monVillage.ajouterBuildingAuVillage(maMairie);
    console.log(
        `Mairie ${maMairie.nom} créée le jour ${maMairie.jourDeCreation}`
    );
    console.log(`${maMairie.nom} porte l'idBuilding ${maMairie.idBuilding}`);
    setTimeout(function () {
        monVillage.ajouterBuildingAuVillage(casernePompiers);
        console.log(
            `Caserne ${casernePompiers.nom} créée le jour ${casernePompiers.jourDeCreation}`
        );
        console.log(
            `${casernePompiers.nom} porte l'idBuilding ${casernePompiers.idBuilding}`
        );
    }, 2000);
}, 3000);
