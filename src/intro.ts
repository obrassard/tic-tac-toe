// @ts-ignore
function main() {
    console.log('Hello, world!');

    // Simple variables types
    const age: number = 23; // Peut aussi contenir des nombres décimaux
    const name: string = 'Arthur'; // Peut aussi utiliser des "double quotes"
    const hasDriverLicense: boolean = true; // or false

    //name = 'John'; // Erreur: Cannot assign to 'name' because it is a constant

    // Exemple d'operation arithmetique
    const currentYear: number = 2022;
    const yearSinceBirth: number = currentYear - 1980;
    console.log(yearSinceBirth);

    // Concatenation de string
    const fullName: string = name + ' Snow'
    console.log(fullName);

    // Operations boolean
    const isAdult = age >= 18; // <=, >, <, ===, !==
    console.log(isAdult);

    // And (les deux doivent etre true)
    const canRentCar = isAdult && hasDriverLicense;
    console.log(canRentCar);

    // Or (un ou l'autre ou les deux doivent etre true)
    const canRentBike = isAdult || hasDriverLicense;
    console.log(canRentBike);

    // Appels de fonctions
    sayHello('Bob');
    sayHello(name);
    //sayHello(123); // Erreur: Argument of type 'number' is not assignable to parameter of type 'string'

    const sum = addition(2, 3);
    console.log(sum);

    const age2 = calculateAge(1980);
    console.log(age2);
}

main();


// Functions
function sayHello(name: string): void {
    const message = 'Bonjour, ' + name + '!';
    console.log(message);
}

function addition(a: number, b: number): number {
    return a + b;
}

function calculateAge(birthYear: number): number {
    const currentYear: number = 2022;
    return currentYear - birthYear;
}

// If / else
function canBuyProduct(age: number, product: string): boolean {
    if (product === 'alcool' && age < 18) {
        console.log('Vous ne pouvez pas acheter ce produit');
        return true;
    } else {
        console.log('Vous pouvez acheter ce produit');
        return false;
    }
}

// Arrays and loops
const fruits: Array<string> = ['pomme', 'banane', 'orange'];
const numbers: Array<number> = [1, 2, 3, 4, 5];

console.log(fruits[0]); // pomme
console.log(fruits[2]); // orange
console.log(fruits.length); // 3
console.log(fruits[3]); // undefined
fruits.push('kiwi'); // Ajoute un element a la fin du tableau
console.log(fruits.length); // 4
console.log(fruits[3]); // kiwi
fruits[0] = 'poire'; // Remplace l'element a l'index 0
console.log(fruits[0]); // poire
console.log(fruits); // ['poire', 'banane', 'orange', 'kiwi']

for (let monFruit of fruits) {
    console.log("J'aime les " + monFruit + 's');
}

for (let monFruit of fruits) {
    if (monFruit === 'kiwi') {
        console.log("Je n'aime pas les " + monFruit + 's');
    } else {
        console.log("J'aime les " + monFruit + 's');
    }
}