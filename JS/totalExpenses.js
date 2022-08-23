// player Expenses, Manager and coach  Total Caluation start

document.getElementById('total-calculate-btn').addEventListener('click', function(){

    const managerValue = getValueFromInputField('manager-field');
    const coachValue = getValueFromInputField('coach-field');

    const totalExpensesId = document.getElementById('total-expenses');
    
    const expenses = getTextFromElementField('player-expenses-field');
    totalExpensesId.innerText = expenses + coachValue + managerValue ;
})
// player Expenses, Manager and coach  Total Caluation end