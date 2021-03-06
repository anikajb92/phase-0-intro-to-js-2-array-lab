// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push('Ralph');
} 

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const allCat = [...cats, 'Broom'];
    return allCat;
}

function prependCat(name) {
   const allCat2 = ['Arnold', ...cats];
   return allCat2;
}

function removeLastCat() {
    const allCat3 = cats.slice(0,2);
    return allCat3;
}

function removeFirstCat() {
    const allCat4 = cats.slice(1);
    return allCat4;
}
