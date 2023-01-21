const street = document.querySelector(".street-result");
const district = document.querySelector(".district-result");
const city = document.querySelector(".city-result");
const state = document.querySelector(".state-result");


 
let cepWhithoutHeaving = "";

function consultCep() {
    const cep = document.querySelector(".cep-input").value;
    
    if(cep.indexOf("-") === -1) {
        cepWhithoutHeaving = cep
        getData(cepWhithoutHeaving)
    }else {
        replaceHeaving(cep);

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
                showResults(data)
        })    
}

function showResults(data) {
    street.innerHTML = data.logradouro
    district.innerHTML = data.bairro
    city.innerHTML = data.localidade
    state.innerHTML = data.uf
}

