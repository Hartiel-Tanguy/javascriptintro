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
