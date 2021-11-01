
button.addEventListener('click', getRandom)

function getRandom() {
    const firstNumber = document.querySelector("#firstNumber");
    const lastNumber = document.querySelector("#lastNumber");
    const resultText = document.querySelector("#result_value");
    const button = document.querySelector("#button");
    const listBan = document.querySelector("#banList")
    const results = document.querySelector('#results')
    let arrayBan = listBan.value.split('\n');
        let random = Math.round(firstNumber.value - 0.5 + Math.random() * (lastNumber.value - firstNumber.value + 1));
            for (ban of arrayBan){
            if (ban == random){
                return getRandom()}
            }
    resultText.innerHTML = random;
    results.value += (`${random}\n`);
    results.focus();
}



