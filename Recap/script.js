require(["library"], function (library) {
    document
        .getElementById("btn")
        .addEventListener("click", () => library.fonction());
    console.log(library.name);
    console.log(library.version);
});
