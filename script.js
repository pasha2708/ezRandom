const firstNumber = document.querySelector("#firstNumber");
      lastNumber = document.querySelector("#lastNumber");
      resultText = document.querySelector("#result_value");
      button = document.querySelector("#button");
      listBan = document.querySelector("#banList")
      clearBanListBtn = document.querySelector('#clear_banlist')
      clearResultsBtn = document.querySelector('#clear_results')
      results = document.querySelector('#results')
let prevResult = 0;

button.addEventListener('click', getRandom)
clearBanListBtn.addEventListener('click', clearBanList)
clearResultsBtn.addEventListener('click', clearResults)

function getRandom() {
    firstNumber.classList.remove('error')
    lastNumber.classList.remove('error')

    if (firstNumber.value == '' || isNaN(firstNumber.value)
        || lastNumber.value == '' || isNaN(lastNumber.value)){
        console.log(false);
        firstNumber.classList.add('error')
        lastNumber.classList.add('error')
        return;
    }

    let arrayBan = listBan.value.split('\n');
        let random = Math.round(firstNumber.value - 0.5 + Math.random() * (lastNumber.value - firstNumber.value + 1));
            for (ban of arrayBan){
            if (ban == random || random == prevResult){
                return getRandom()}
            }
            
    resultText.innerHTML = random;
    prevResult = random;
    results.value += (`${random}\n`);
    results.focus();
}

function clearBanList() {
    listBan.value = "";
}

function clearResults() {
    results.value = "";
}



