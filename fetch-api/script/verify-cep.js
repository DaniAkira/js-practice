function verifyIsNumber(string) {
    let stringArray = [];
    let firstString = "";
    let secondString = "";

    stringArray = string.split("-");
    firstString = stringArray[0];
    secondString = stringArray[1];

    if(!isNaN(firstString) && !isNaN(secondString) && firstString.length + secondString.length == 8) {
        return true;
    }else {
        return false
    }

};

function replaceHeaving(string) {
    cepWhithoutHeaving = string.replace("-", "");
    return cepWhithoutHeaving
};

export { verifyIsNumber, replaceHeaving }