
window.console.log("Yo");
var test = window.prompt("Saisissez votre mot de passe");
console.log(test)

if (test === "Lison") {
    alert("🌠☀ Bienvenue, Lison. Vous pouvez entrer.☀🌠");
}
else {
    alert("Non 🙄");
}

function checkPassword() {
    var val = document.querySelector("input").value;
    if (val === "Lison") { alert("Bienvenue !") }
    else { alert("Désolé, l'accès est refusé") }
}
