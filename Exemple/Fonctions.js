dict = {
    moyenne: 0,
    filtre: 1,
};

function Execution(str) {
    console.log(LDF[dict[str]]());
}

function nom(parametre) {
    //coprs de la fonction
}

// fonctions anonymes

lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const LDF = [];

LDF.push(function () {
    let res = 0;
    for (let i = 0; i < lst.length; i++) {
        res += lst[i];
    }
    return res / lst.length;
});

LDF.push(function (x) {
    console.log("filter = " + x);
    res = [];
    for (let i = 0; i < lst.length; i++) {
        if (lst[i] > x) {
            res.push(lst[i]);
        }
    }
    return res;
});

Execution("moyenne");

console.log(LDF[MOYENNE]());
console.log(LDF[FILTRE](5));

Me = [0, 1];

// Execution(Me);
// function Execution(Me) {
//     for (let i = 0; i < Me.length; i++) {
//         LDF[Me[i]](i);
//     }
// }

let x = function (parametre) {
    //coprs de la fonction
};

// fonctions fléchées

let y = (parametre) => {
    //coprs de la fonction
};

// fonctions imbriquées

let test = 5;
let c = 10;
let portee = 15;

principale(test, c);

function principale(a, b) {
    // corps de la fonction
    console.log("principale");
    console.log(portee);
    console.log(a);
    console.log(b);
    secondaire(20, 25);

    function secondaire(c, d) {
        // corps de la fonction
        console.log("secondaire");
        console.log(portee);
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
    }
}

// fonctions récursives

function factorielle(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

// redéfinition de fonctions

const monObjet = {
    nom: "Dupont",
    yolo(a) {
        console.log(a);
    },
};

monObjet.methode = function () {
    this.nom = "Defours";
};

String.prototype.toInt = function () {
    return 5;
};

monObjet.yolo(5);

monObjet.yolo = function (b) {
    console.log(b + 5);
};

monObjet.yolo(5);

str = "yolo";

console.log(str.toInt());
"fdjgksngfjdsngfjsd".toInt();
