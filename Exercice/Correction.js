function createPyramid(n) {
    console.group("createPyramid");

    const objArray = [
        { a: 1, b: 2 },
        { a: 3, b: 4 },
    ];
    console.table(objArray);
    for (let i = 1; i <= n; i++) {
        let str = " ".repeat(n - i);
        console.warn(
            "mon nombre d'espace est : " + str.length + " et i = " + i
        );
        if (i == 5) console.error("i = 0");
        let str2 = "*".repeat(i * 2 - 1);
        try {
            console.log(i);
        } catch (e) {
            console.error(e);
        } finally {
            console.log(str + str2 + str);
        }
    }
    console.groupEnd();
}
function createInversedPyramid(n) {
    console.group("createInversedPyramid");
    for (let i = n; i >= 1; i--) {
        let str1 = " ".repeat(n - i);
        let str12 = "*".repeat(i * 2 - 1);
        console.log(str1 + str12 + str1);
    }
    console.groupEnd();
}

createPyramid(5);
createInversedPyramid(5);
