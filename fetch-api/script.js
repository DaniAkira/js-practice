import { removeErrorMessage, toggleBtns, toggleResults, showFormatError } from "./script/error&results";
import getData from "./script/get-data";
import { verifyIsNumber, replaceHeaving } from "./script/verify-cep";

const input = document.querySelector(".cep-input");

const generalDiv = document.querySelector(".general");

const consultCepBtn = document.querySelector(".consult-btn");
const resetCepBtn = document.querySelector(".reset-btn");

let cepWhithoutHeaving = "";

consultCepBtn.addEventListener("click", consultCep());
resetCepBtn.addEventListener("click", resetCepBtn());

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
