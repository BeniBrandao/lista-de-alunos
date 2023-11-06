nomeestudanteArrai =[];

function enviar(){
var name1 =document.getElementById("NOMEDOESTUDANTE1").value;
var name2 =document.getElementById("NOMEDOESTUDANTE2").value;
var name3 =document.getElementById("NOMEDOESTUDANTE3").value;
var name4 =document.getElementById("NOMEDOESTUDANTE4").value;

nomeestudanteArrai.push(name1)
nomeestudanteArrai.push(name2)
nomeestudanteArrai.push(name3)
nomeestudanteArrai.push(name4)

console.log(nomeestudanteArrai)

document.getElementById("mostrarnomes").innerHTML = nomeestudanteArrai;
document.getElementById("botaoenviar").style.display = none;
document.getElementById("botaoorganisar").style.display = inline;


}