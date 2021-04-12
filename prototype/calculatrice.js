<<<<<<< HEAD
function calcul() {
    var a = 0;
    a = eval(document.getElementById('affichage').value);
    document.getElementById('affichage').value = a;
};

function ajouter(nombre) {
    document.getElementById('affichage').value += nombre;

};

function del() {
    document.getElementById('affichage').value = "";
=======
// Variables
let x,y,solution,operation;
let xString, yString;


// Métier
function Calculer(x,y,operation){
    let _solution = undefined;
    switch (operation) {
        case '+':
            _solution = x + y;
            break;
        case '-':
            _solution = x-y;
                break;
        default:
            break;
    }
    return _solution;
}


// Présentation
function ClickNumber(number){
    if(x == undefined){
        if(xString == undefined) xString = '';
        xString += number;
    } 
    else {
        if(yString == undefined) yString = '';
        yString += number;
    } 

    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(x != undefined && y != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(xString != undefined)
        afficheur.value += xString 
        if(operation != undefined)
            afficheur.value += operation     
        if(yString != undefined)
            afficheur.value += yString 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        x = parseFloat(xString);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}

function Egale(){
    x = parseFloat(xString);
    y = parseFloat(yString);
    solution = Calculer(x,y,operation);
    Afficher(solution);
}

function Init(){
    x = undefined;
    y = undefined;
    xString = undefined;
    yString = undefined;
    operation = undefined;
    let afficheur = document.getElementById("afficheur");
    
    afficheur.value = "";
>>>>>>> b32adff3d361c6b3e6935f759ae876905e47676f
}