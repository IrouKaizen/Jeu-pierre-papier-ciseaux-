/*const contenantChoixOrdinateur = document.getElementById('choix-o');
const contenantChoixUtilisateur = document.getElementById('choix-u');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixU
let choixO

//click sur bouttons
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    //recupérer id du bouton cliqué
    choixU = e.target.id;
    //ajout de l'image correspondant
    contenantChoixUtilisateur.innerHTML = `<img src="${choixU}.gif">`
    generer_choix_ordinateur();
    verification()
}))

//Fonction generer choix ordi
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() *3) +1 //générer des nombres entre 1 et 3
    if(random === 1){ //si r = 1
        choixO = "pierre"
    }
    if(random === 2){ //si r = 2
        choixO = "papier"
    }
    if(random === 3){ //si r = 3
        choixO = "ciseaux"
    }
    //ajout de l'image correspondant
    contenantChoixUtilisateur.innerHTML = `<img src="${choixO}.gif">`
}

//Fonction verification du gagnant
function verification(){
    if(choixU == choixO){
        resultat = "Egalité !" ;
    }
    //cas où le jouer perd
    if(choixU == "pierre" && choixO == "papier"){
        resultat = "Perdu !" ;
    }
    if(choixU == "papier" && choixO == "ciseaux"){
        resultat = "Perdu !" ;
    }
    if(choixU == "ciseaux" && choixO == "pierre"){
        resultat = "Perdu !" ;
    }

    //cas où le jouer perd

    if(choixU == "pierre" && choixO == "papier"){
        resultat = "Perdu !" ;
    }
    if(choixU == "papier" && choixO == "ciseaux"){
        resultat = "Perdu !" ;
    }
    if(choixU == "ciseaux" && choixO == "pierre"){
        resultat = "Perdu !" ;
    }

    //cas où le jouer gagne
    if(choixU == "pierre" && choixO == "ciseaux"){
        resultat = "Perdu !" ;
    }
    if(choixU == "papier" && choixO == "pierre"){
        resultat = "Perdu !" ;
    }
    if(choixU == "ciseaux" && choixO == "papier"){
        resultat = "Perdu !" ;
    }
    contenantResultat.innerHTML = resultat;
}*/

const contenantChoixOrdinateur = document.getElementById('choix-o');
const contenantChoixUtilisateur = document.getElementById('choix-u');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixU;
let choixO;
let resultat;

// Clique sur les boutons
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e) => {
    // Récupère l'id du bouton cliqué
    choixU = e.target.id;
    // Ajoute l'image correspondante
    contenantChoixUtilisateur.innerHTML = `<img src="${choixU}.gif">`;
    generer_choix_ordinateur();
    verification();
}));

// Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur() {
    const random = Math.floor(Math.random() * 3) + 1; // Génère des nombres entre 1 et 3
    if (random === 1) { 
        choixO = "pierre";
    } else if (random === 2) { 
        choixO = "papier";
    } else { 
        choixO = "ciseaux";
    }
    // Ajoute l'image correspondante pour le choix de l'ordinateur
    contenantChoixOrdinateur.innerHTML = `<img src="${choixO}.gif">`;
}

// Fonction de vérification du gagnant
function verification() {
    if (choixU === choixO) {
        resultat = "Égalité !";
    }
    // Cas où le joueur perd
    else if ((choixU === "pierre" && choixO === "papier") ||
             (choixU === "papier" && choixO === "ciseaux") ||
             (choixU === "ciseaux" && choixO === "pierre")) {
        resultat = "Perdu !";
    }
    // Cas où le joueur gagne
    else {
        resultat = "Gagné !";
    }
    contenantResultat.innerHTML = resultat;
}
