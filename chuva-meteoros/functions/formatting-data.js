import {reverseDate, verifyHemisphere} from "./functions.js"


const printRain = (rain) => {
    let name = rain.name.padEnd(27, ".");
    let intensity = rain.intensity.padEnd(11, ".");
    let hemisphere = verifyHemisphere(rain.declination).padEnd(10, ".");

    const startDay = reverseDate(rain.rainStartDay);
    const endDay = reverseDate(rain.rainEndDay);

    

    console.log(`${name} - ${intensity} - ${hemisphere} - ${startDay} à ${endDay}`);
}

const formattingTittle = (tittle) => {
    return tittle.padStart(40, " ");
};

export {formattingTittle, printRain}