// Liste globale
let list = [5, 3, 8, 1, 6];

// Fonction de tri
function sortWithPredicate(predicate) {
    for (let i = 0; i < list.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < list.length; j++) {
            if (predicate(list[j], list[minIndex])) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = list[i];
            list[i] = list[minIndex];
            list[minIndex] = temp;
        }
    }
}

// Prédicat pour le tri en ordre croissant
function ascending(a, b) {
    return a < b;
}

// Utilisation de la fonction de tri
sortWithPredicate(ascending);

console.log(list); // Affiche: [1, 3, 5, 6, 8]
