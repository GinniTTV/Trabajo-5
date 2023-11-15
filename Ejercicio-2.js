console.log("");
console.log("EJE NRO 2:");

var cantDeGatos = 14;
var cantDePasos = 7;

for (let i = 1; i <= cantDeGatos; i++) {
    const gato = "Gato #";
    const gatoNum = gato+`${i}: 🐈`;
    let PasosdeGatos = gatoNum; 
    for (let x = 0; x < cantDePasos; x++) {
        PasosdeGatos = PasosdeGatos.concat("🐾");
    }
    console.log(PasosdeGatos);
}