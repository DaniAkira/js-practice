const input = document.querySelector(".cep-input");

const results = document.querySelector(".results");

const street = document.querySelector(".street-result");
const district = document.querySelector(".district-result");
const city = document.querySelector(".city-result");
const state = document.querySelector(".state-result");

const resetBtn = document.querySelector(".reset-btn");
const consultBtn = document.querySelector(".consult-btn");

const generalDiv = document.querySelector(".general");
const errorMessage = document.querySelector(".general p");

let cepWhithoutHeaving = "";

function consultCep() {
    const cep = document.querySelector(".cep-input").value;
    
    if(cep.indexOf("-") === -1 && cep.length == 8 && !isNaN(cep)) {
        getData(cep);
    }else if (cep.length == 9 && verifyIsNumber(cep)) {
        replaceHeaving(cep);
        getData(cepWhithoutHeaving);
    }else {
        showFormatError(); 
        toggleBtns();
    }
}

function resetCep() {
    const errorMessage = generalDiv.querySelector(".error-message");

    if (errorMessage != undefined && errorMessage != null){
        input.value = "";
        toggleBtns();
        removeErrorMessage();
    } else {
        input.value = "";
        toggleBtns();
        toggleResults();
    }
}

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

}

function replaceHeaving(string) {
    cepWhithoutHeaving = string.replace("-", "");
    return cepWhithoutHeaving
}

async function getData(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                return response.json()
            }).then(data => {
                if (data.erro == true){
                    showError();
                    toggleBtns();
                }else {
                    showResults(data);
                    toggleResults();
                    toggleBtns();
                }
        })    
}

function showResults(data) {
    street.innerHTML = data.logradouro
    district.innerHTML = data.bairro
    city.innerHTML = data.localidade
    state.innerHTML = data.uf
}

function toggleResults() {
    results.classList.toggle("hide");
}

function toggleBtns() {
    resetBtn.classList.toggle("hide");
    consultBtn.classList.toggle("hide");
}

function showError() {
    const errorMessage = `Endereço não existe em nosso banco de dados`;
    const errorHtml = document.createElement("p");

    errorHtml.classList.add("error-message");
    errorHtml.innerHTML = errorMessage;

    generalDiv.appendChild(errorHtml);
}

function showFormatError() {
    const errorMessage = `Formato inválido, digite o CEP nos formatos "00000000" ou "00000-000"`
    const errorHtml = document.createElement("p");

    errorHtml.classList.add("error-message");
    errorHtml.innerHTML = errorMessage;

    generalDiv.appendChild(errorHtml);
}

function removeErrorMessage() {
    const errorText = document.querySelector(".error-message");
    errorText.remove();
}


