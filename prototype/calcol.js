function resultat() {
    var x = 0;
    x = eval(window.document.calculatrice.affiche.value);
    window.document.calculatrice.affiche.value = x;
}

function ajouter(caracteres) {
    window.document.calculatrice.affiche.value =
        window.document.calculatrice.affiche.value + caracteres;
}


