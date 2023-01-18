import rainArray from "./data/data.js";
import {verifyRainByDate, verifyRainsNextTwoMonths} from "./functions/functions.js"
import {formattingTittle, printRain} from "./functions/formatting-data.js"

const dateToday = new Date();
const rainsToday = rainArray.filter((rain) => verifyRainByDate(rain, dateToday));
const rainsNextTwoMonths = rainArray.filter((rain) => verifyRainsNextTwoMonths(rain, dateToday));
const tittle = "Chuva de meteoros"
let tittleFormated = formattingTittle(tittle);

console.log("\n")
console.log(tittleFormated);

if(rainsToday.length > 0){
    console.log("Chuvas de meteoros que podem ser vistas hoje: ")
    console.log("Nome da chuva:              Intensidade:  Hemisfério:  Período:")
    rainsToday.forEach((rain) => {
        printRain(rain);
    })
}else {
    console.log("Nenhuma chuva de meteoros no dia de hoje.")
}
console.log("\n")
console.log("Chuvas que vão acontecer nos próximos 2 meses:");
console.log("Nome da chuva:              Intensidade:  Hemisfério:  Período:");
rainsNextTwoMonths.forEach((rain) => {
    printRain(rain);
})






