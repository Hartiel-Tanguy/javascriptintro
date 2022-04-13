let age = window.prompt("qu'elle age avez vous");
if (age<18){
    console.log("vous êtes un enfant")
} else {
    console.log("vous êtes adulte")
}

let min =Number(window.prompt("donnez un petit chifre ")) ;
let max =Number(window.prompt("donnez un plus grand chiffre"));
let current =Number(window.prompt("donnez un chifre entre les deux"));
if ((min<current) && (max>current)) {
    console.log("bien joué");
} else {
    console.log("réfléchissé mieu");
}


let nem = 0;
while (nem <= 100) {
    console.log(nem);
    nem +=2
}
for (let nom = 0; nom <=100; nom +=2){
    console.log(nom)
}





let num = prompt("entre ton num favorie")
 
if (num == "42") {
        alert("voila un beau chifre")
} else if (num != "42") { while (num != "42") {
        alert("pas ouf trouve en un autre");
        num = prompt("alors le quel chooissi tu");
        }
        if (num == "42")
        {alert("voila beaucoups mieu se chiffe")}
}








let j = prompt("donner un chiffre entre 1 et 7")

if (j=="1"){
    console.log("lundi");
} else if(j=="2"){
    console.log("mardi")

} else if (j=="3"){
    console.log("mercredi")
} else if(j=="4"){
    console.log("jeudi")
} else if(j=="5"){
    console.log("vendredi")
} else if(j=="6"){
    console.log("samedi")
} else if(j=="7"){
    console.log("dimanche")
}




let n = Number(prompt("entré un nombre"));
let fin = 0;
let ha = 0;

while (n!=0) {
    ha = Number(prompt("Entre un numéro MAINTENANT"));
    fin += ha;
    n --
}

alert ("The result is  " + fin)

