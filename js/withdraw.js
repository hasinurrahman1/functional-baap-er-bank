/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. previous withdraw amount by using getTextElementById function
4. calculate new withdraw Total and set the value
4-5. set new withdraw total by using setTextElementById function
5. get previous balance total
6. calculate new balance total
*/ 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawTotalAmount = getInputFieldValueById ('withdraw-field')
    const previousWithdrawTotalAmount = getTextElementById('withdraw-total')
    const newWithdrawTotal = previousWithdrawTotalAmount + newWithdrawTotalAmount;
    setTextElementById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotalAmount = getTextElementById('balance-total')
    const currentBalance = previousBalanceTotalAmount - newWithdrawTotalAmount;
    setTextElementById('balance-total', currentBalance);
    
});