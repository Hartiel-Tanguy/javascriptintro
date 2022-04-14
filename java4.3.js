function rand10(max) {
    let info = Math.random()*10;
    return Math.round(info);
}
console.log(rand10(10));

function multirand(n){
    let i = 0
    let array = []
        while(n--)
            array(i++) = rand10()
        return array
}



