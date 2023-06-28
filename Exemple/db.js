let db;
let request = indexedDB.open("myDB", 1);

request.onerror = function (event) {
    console.log("error: ");
};

request.onsuccess = function (event) {
    db = event.target.result;

    let transaction = db.transaction(["users"], "readwrite");
    let store = transaction.objectStore("users");
    let request = store.add({ id: 1, username: "admin", password: "admin" });
};

function addUser(user) {
    let tx = db.transaction("users", "readwrite");
    let store = tx.objectStore("users");
    store.add(user);
}

function getUsers() {
    let tx = db.transaction("users", "readonly");
    let store = tx.objectStore("users");
    return store.getAll();
}
