const street = document.querySelector(".street-result");
const district = document.querySelector(".district-result");
const city = document.querySelector(".city-result");
const state = document.querySelector(".state-result");

const generalDiv = document.querySelector(".general");

function showResults(data) {
    street.innerHTML = data.logradouro
    district.innerHTML = data.bairro
    city.innerHTML = data.localidade
    state.innerHTML = data.uf
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

export { showError, showFormatError, showResults, removeErrorMessage }