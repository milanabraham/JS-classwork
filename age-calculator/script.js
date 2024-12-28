let btnEl = document.getElementById("btn")

const calAge = btnEl.addEventListener("click" ,() => {
    let birthEl = document.getElementById("birthday")
    let birthValue = birthEl.value;
    let resultEl = document.getElementById("result")
    const year = new Date().getFullYear();
    const birthDate = new Date(birthValue).getFullYear();
    let currentAge = year - birthDate;
    resultEl.textContent = `Your age is ${currentAge} years old`

    if(birthValue.trim() === "" ){
        alert("Enter a valid date !")
        resultEl.textContent = `Your age is 00 years old`
    }

}) 