console.log("");
console.log("EJE NRO 3:");

var cantDeGatos = 13;
var cantDePasos = 7;

for (let i = 1; i <= cantDeGatos; i++) {
    const gato = "Gato #";
    if (i % 2 === 0) {
        gatoColor = ("🐈‍⬛")
    } else {
        gatoColor = ("🐈")
    }
    const gatoNum = gato+`${i}: ${gatoColor}`;
    let PasosdeGatos = gatoNum; 
    for (let x = 0; x < cantDePasos; x++) {
        PasosdeGatos = PasosdeGatos.concat("🐾");
    }
    console.log(PasosdeGatos);
}

