let display = document.getElementById('display');
//let historyList = document.getElementById('historyList');

function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculateResult() {
    try {
        // Realiza a operação, mas não usa o resultado
        eval(display.innerText);
        let resultMessage = "Usuário Cadastrado"; // Mensagem fixa
        //historyList.innerHTML += `<li>${display.innerText} = ${resultMessage}</li>`;
        display.innerText = resultMessage; // Mostra "Usuário Cadastrado" na tela
    } catch (error) {
        display.innerText = 'Lamento';
    }
}
