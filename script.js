/* Exercice 1*/

let NaissanceGrand = prompt("Entrer la date de naissance du plus grand (Annee)");
let NaissancePetit = prompt("Entrer la date de naissance du plus petit (Annee)");

let AnneeRechercher = (2 * NaissancePetit) - NaissanceGrand;

let AgeGrand = AnneeRechercher - NaissanceGrand;
let AgePetit = AnneeRechercher - NaissancePetit;

alert("L'Annee rechercher est "+ AnneeRechercher + "\n L'age du plus grand sera " + AgeGrand + "\n ans et l'Age du plus petit sera " + AgePetit + " ans");

/*Exercice 2 */

let CodePostale = prompt("Veuillez Saisir votre code Postale");

if((isNaN(CodePostale) == true) || (CodePostale.length != 5)){
    console.log("erreur");
}else {
    console.log("succes");
}

/*Exercice 3 */
let Mot = prompt("Veuillez Entrer un mot");
let RetourneMot ="";
for(let choix of Mot){
    if(choix == "e" || choix == "i" || choix == "a" || choix == "o" || choix == "u"){
        choix ="";
    }else{
        RetourneMot = RetourneMot + choix;
        console.log(RetourneMot);
    }   
}
