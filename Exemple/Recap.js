const ADD = 0;
const MULT = 1;
const SUB = 2;
const DIV = 3;

dic = {
    ADD: 0,
    MULT: 1,
    SUB: 2,
    DIV: 3,
};

function Exec(str, a, b) {
    lst[dic[str]](a, b);
}

Exec("MULT", 2, 45);

lst = [add, mult, sub, div];

console.log(dic["MULT"]);

console.log(lst[dic["MULT"]](2, 2));

lst2 = [
    function (a, b) {
        return a + b;
    },
    function (a, b) {
        return a * b;
    },
    function (a, b) {
        return a - b;
    },
    function (a, b) {
        return a / b;
    },
];

lst3 = [];

lst3.push(function (a, b) {
    return a + b;
});

lst3.push(function (a, b) {
    return a * b;
});

lst3.push(function (a, b) {
    return a - b;
});

lst3.push(function (a, b) {
    return a / b;
});

lst4 = [(a, b) => a + b, (a, b) => a * b, (a, b) => a - b, (a, b) => a / b];

let res = lst4[MULT](2, 2);

console.log(res);

function add(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filter((a, b) => a < b);

function filter(predicate) {}
