document.getElementById('btn-deposit').addEventListener('click', function(){
    /*
    1. get the element by id
    2. get the value from the element 
    3.convert string value to a number
    */ 
    const newDepositTotalAmount = getInputFieldValueById('deposit-field')
    // 1. get previous deposit total by id
    const previousDepositTotalAmount = getTextElementById('deposit-total')
    // calculate new deposit total
    const newDepositTotal = previousDepositTotalAmount + newDepositTotalAmount;
    // set deposit total value
    setTextElementById('deposit-total', newDepositTotal);
    // get previous balance by using the function
    const previousBalanceTotalAmount = getTextElementById('balance-total')
    const currentBalance = previousBalanceTotalAmount + newDepositTotalAmount;
    setTextElementById('balance-total', currentBalance);
})