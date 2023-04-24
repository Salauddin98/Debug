// select all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');


// Button click and selected player update
function addPlayer(playerName) {
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for (const button of buttons) {
    button.addEventListener('click', (e) => {
        if (selectedPlayer.children.length <= 4) {
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        } else {
            button.classList.remove('disabled');
            addPlayer(button.parentNode.children[0].innerText)
            alert('5 Played already Selected');
        }
    })
}

// A common function for getInput value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    return inputFieldValue
};

function getValueOfElement(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}



// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function () {
    const perPlayerBudget = document.getElementById('per_player_budget').value;
    if (perPlayerBudget < 0) {
        return alert("Please Provide a Positive value")

    } else {
        let totalPlayerExpense = perPlayerBudget * 5;
        getValueOfElement('player_expense', totalPlayerExpense)
    }
    document.getElementById('per_player_budget').value = '';

})
document.getElementById('calculate_total_budget').addEventListener('click', function () {
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)
    const managerBudget =parseInt(document.getElementById('manager_budget').value) ;
    const coachBudget = parseInt(document.getElementById('coach_budget').value) ;
    if (managerBudget < 0 || coachBudget < 0) {
        return alert("Please Provide a Positive value")
    } else {
        let totalExpense = playerTotalBudget + managerBudget + coachBudget;
        getValueOfElement('player_total_expense', totalExpense)
    }
    document.getElementById('manager_budget').value = '';
    document.getElementById('coach_budget').value = '';

})

