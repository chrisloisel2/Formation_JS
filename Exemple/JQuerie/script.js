$(document).ready(() => {
    $("#btn").click(() => {
        console.log("Hello World");
    });

    lst = [
        (x) => {
            x.css("background-color", "red");
        },
        (x) => {
            x.css("background-color", "yellow");
        },
        (x) => {
            x.css("background-color", "blue");
        },
        (x) => {
            x.css("background-color", "pink");
        },
        (x) => {
            x.css("background-color", "cyan");
        },
        (x) => {
            x.css("background-color", "black");
        },
        (x) => {
            x.css("background-color", "grey");
        },
    ];

    // lstBalise = [];
    $("li:nth-child(1)").css("background-color", "red");
    $("ul").children().css("background-color", "yellow");
    $("p").each((key, element) => {
        $(element).click(() => {
            lst[Math.floor(Math.random() * lst.length)]($(element));
        });
    });
    // lstBalise.forEach((x) => {
    //     x.click(() => {
    //         lst[Math.floor(Math.random() * lst.length)](x);
    //     });
    // });
});
