"use strict";
$("<h3><h3/>");
$("<p/>").text("This is my form. Please fill it out. It's awesome!");
let form = $("<form></form>");
form.append($("<input>",{ type:'text',placeholder:'votre nom',name:'nom' }));
form.append($("<input>",{ type:'text',placeholder:'votre prenom',name:'prenom' }));
form.append($("<input>",{ type:'text',placeholder:'votre couriel',name:'couriel' }));
form.append($("<input>",{ type:'text',placeholder:'votre numero telephone',name:'telephone' }));
form.append($("<input>",{ type:'text',placeholder:'votre adress',name:'adress' }));
form.append($("<input>",{ type:'date',placeholder:'date debut sejour',name:'sday'}));
form.append($("<input>",{ type:'number',placeholder:'nombre de participants',name:'nombre_participants' }));
form.append('<input type="button" value="Reserver">');

