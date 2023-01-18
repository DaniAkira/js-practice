let signArray = [
    {"name": "Aquário", "startDate": "01-20","endDate":"02-18"},
    {"name": "Peixes", "startDate": "02-19","endDate":"03-20"},
    {"name": "Áries", "startDate": "03-21","endDate":"04-19"},
    {"name": "Touro", "startDate": "04-20","endDate":"05-20"},
    {"name": "Gêmeos", "startDate": "05-21","endDate":"06-21"},
    {"name": "Câncer", "startDate": "06-22","endDate":"07-23"},
    {"name": "Leão", "startDate": "07-24","endDate":"08-22"},
    {"name": "Virgem", "startDate": "08-23","endDate":"09-22"},
    {"name": "Libra", "startDate": "09-23","endDate":"10-22"},
    {"name": "Escorpião", "startDate": "10-23","endDate":"11-21"},
    {"name": "Sagitário", "startDate": "11-22","endDate":"12-21"},
    {"name": "Capricórnio", "startDate": "12-22","endDate":"01-19"}
];

let date = new Date();

const rangeVerify = (date, startDaySign, endDaySign, capricornioBug) => {
    if(capricornioBug == "and"){
        return (date >= startDaySign && date <= endDaySign)
    }else if(capricornioBug == "or"){
        return (date >= startDaySign || date <= endDaySign)
    }

}

const returnSign = (signs, date) => {
    let year = date.getFullYear();

    for(let sign of signs){
        let startDaySign = new Date(year+"-"+sign.startDate+" 00:00:00");
        let endDaySign = new Date(year+"-"+sign.endDate+" 00:00:00");

        let capricornioBug = sign.startDate == "12-22" ? "or" : "and";

        if(rangeVerify(date, startDaySign, endDaySign, capricornioBug)){
            return sign.name;
        }
    }

}

const signName = returnSign(signArray, date);

console.log(`O signo de hoje é ${signName}`);

