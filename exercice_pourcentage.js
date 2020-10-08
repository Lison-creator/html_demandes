var depense = 30;
var reduction = 0;
console.log("Vous avez dépensé: " + depense)

if (depense < 20) {
    reduction = 0;
    console.log("Vous n'avez pas de réduction")
    var total = depense - reduction
    console.log("Votre total est de " + total + " euros.")
};

if (depense >= 20 && depense <= 30) {
    reduction = 10 / 100 * depense;
    console.log("Votre réduction est de 10%")
    var total = depense - reduction
    console.log("Votre total est de " + total + " euros.")
};

if (depense >= 31 && depense <= 50) {
    reduction = 20 / 100 * depense;
    console.log("Votre réduction est de 20%")
    var total = depense - reduction
    console.log("Votre total est de " + total + " euros.")
};

if (depense > 50) {
    reduction = 20 / 100 * depense;
    console.log("Votre réduction est de 30%")
    var total = depense - reduction
    console.log("Votre total est de " + total + " euros.")
};
function boutonF12 {
    var bouton = document.querySelector("button");
    if (bouton.innerText == "ici") {
        bouton.innerText = "clique pas ici, clique sur F12"
    }
}