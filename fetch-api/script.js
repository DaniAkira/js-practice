import { showFormatError, removeErrorMessage } from "./script/error&results";
import {toggleResults, toggleBtns} from "./script/toggle"
import getData from "./script/get-data";
import { verifyIsNumber, replaceHeaving } from "./script/verify-cep";

const input = document.querySelector(".cep-input");
const generalDiv = document.querySelector(".general");

const resetBtn = document.querySelector(".reset-btn");
const consultBtn = document.querySelector(".consult-btn");


let cepWhithoutHeaving = "";

consultBtn.addEventListener("click", function() {
    const cep = document.querySelector(".cep-input").value;

    console.log(cep)
    
    if (cep.indexOf("-") === -1 && cep.length == 8 && !isNaN(cep)) {
        getData(cep);
    }else if (cep.length == 9 && verifyIsNumber(cep)) {
        replaceHeaving(cep);
        getData(cepWhithoutHeaving);
    }else {
        showFormatError(); 
        toggleBtns();
    }
});

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
};
