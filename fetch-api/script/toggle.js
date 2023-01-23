const resetBtn = document.querySelector(".reset-btn");
const consultBtn = document.querySelector(".consult-btn");
const results = document.querySelector(".results");

function toggleResults() {
    results.classList.toggle("hide");
}

function toggleBtns() {
    resetBtn.classList.toggle("hide");
    consultBtn.classList.toggle("hide");
}

export {toggleResults, toggleBtns};