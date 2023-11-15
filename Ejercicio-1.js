console.log("");
console.log("EJE NRO 1:");

const cantGatos = 15;

for ( let i = 1; i<= cantGatos; i++) {
const modulo = i % 3;
let catNumber = `Gato #${i}`;
if (modulo === 1) {
    catNumber = catNumber.concat ("😺")
} else if (modulo === 2) {
    catNumber = catNumber.concat ("😸")
} else {
    catNumber = catNumber.concat ("😹")

}

console.log(catNumber)

}
