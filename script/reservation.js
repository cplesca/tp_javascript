"use strict";
// Pour chercher dans lurl le parametre name
function getParameterByName(name) {
    let match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

/*
document.createElement("<h1>Veuillez remplir les informations :</h1>");
let f = document.createElement("form");
let i = document.createElement("input");
let s = document.createElement("input");
f.appendChild(i);
f.appendChild(s);
document.getElementsByTagName('body')[0].appendChild(f);
*/


let id_forfait = parseInt(getParameterByName("id"));
console.log("id forfait dans la queryString : ", id_forfait);
// Si pas valide, prendre 0 (idiot)
if (isNaN(id_forfait) || (id_forfait < 0) || (id_forfait > 11) ) {
    id_forfait = 0;
}
// Prendre le bon forfait dans le tableau des forfaits
let forfait = forfaits_data[id_forfait];
console.log("le forfait est : ", forfait);

remplir_page();

function remplir_page() {
    let div_forfait = $(".forfait_data");
    div_forfait.find("h3.nom_forfait").text(forfait.nom);
    div_forfait.find("img.img_forfait_1").attr("src", "images/" + forfait.photo1);
    div_forfait.find("img.img_forfait_2").attr("src", "images/" + forfait.photo2);
    div_forfait.find("img.img_forfait_3").attr("src", "images/" + forfait.photo3);

}
