var total = 41;
var moitié = Math.round(total / 2);


for (var pizza = 1; pizza <= 20; pizza++) {

    if (pizza !== 10 && pizza !== 1) {
        console.log(pizza + " pizzas ont été vendues.");
    }
    if (pizza === 10) {
        console.log(pizza + " pizzas ont été vendues. Vous êtes déja à la moitié!")
    }
    if (pizza === 1) {
        console.log(pizza + " pizza a été vendue.")
    }

}
console.log("Bravo, votre soirée est terminée!")

