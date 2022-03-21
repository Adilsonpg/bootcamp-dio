function filtraPares (arr) {
    return arr.filter(callback)
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [1, 22, 48, 99, 97, 54];

console.log(filtraPares(meuArray))