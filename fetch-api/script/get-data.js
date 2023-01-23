import { showError } from "./error&results";
import { toggleBtns, toggleResults, showResults } from "./toggle";

function getData(cep) {
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

export default getData