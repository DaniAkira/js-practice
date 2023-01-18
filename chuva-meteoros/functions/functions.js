const verifyRainByDate = (rain, dateToday) => {
    const todayYear = dateToday.getFullYear();
    const startDate = new Date(rain.rainStartDay + '/' + todayYear);
    const endDate = new Date(rain.rainEndDay + '/' + todayYear);
    
    if(startDate.getMonth() + 1 > endDate.getMonth() + 1){
        const finalYear = endDate.getFullYear();
        endDate.setFullYear(finalYear + 1);
    }

    return (dateToday >= startDate && dateToday <= endDate);
}

const verifyRainsNextTwoMonths = (rain, dateToday) => {
    const todayYear = dateToday.getFullYear();
    const startDate = new Date(rain.rainStartDay + '/' + todayYear);
    const endDate = new Date(dateToday);
    
    if(startDate.getMonth() + 1 > endDate.getMonth() + 1){
        const finalYear = startDate.getFullYear();
        startDate.setFullYear(finalYear + 1);
    }
    
    endDate.setMonth(dateToday.getMonth() + 2);

    return (dateToday < startDate && endDate > startDate);
}

const reverseDate = (date) => {
    const invertedDate = date.split("/");
    return invertedDate[1] + "/" + invertedDate[0];
}

const verifyHemisphere = (hemisphere) => {
    return hemisphere >= 0 ? "Norte" : "Sul";
}


export {verifyRainByDate, verifyRainsNextTwoMonths, reverseDate, verifyHemisphere};

