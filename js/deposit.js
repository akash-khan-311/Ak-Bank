/* ============================
=======Table Of Contents========

!===> 1. Add Even Lisenter To The Deposit Button
1.1 Get Input value with getInputValueById Function
1.2 Get Text Value with getTextElementById Functin
1.3 Caculate Previous Deposit Amount and New Deposit Amount
1.4 Set Total Deposit Amouont in Element with setElementValueById
1.5 Get Previous Total Balence 
1.6 Caculate Previous Balence and New Deposit Amount
1.7 Set Total Balence Witf setElementValueById
=============================== */

//! 1. Add Even Lisenter To The Deposit Button
document.getElementById('deposit-btn').addEventListener('click', function () {
    //1.1 Get Input value with getInputValueById Function
    const newDepositAmount = getInputValueById('deposit-feild');
    //1.2 Get Text Value with getTextElementById Functin
    const previousDepositAmount = getTextElementById('deposit-amount');
    // 1.3 Caculate Previous Deposit Amount and New Deposit Amount
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    //1.4 Set Total Deposit Amouont in Element with setElementValueById
    setElementValueById('deposit-amount', totalDepositAmount)
    // 1.5 Get Previous Total Balence 
    const previousTotalBalence = getTextElementById('balence');
    // 1.6 Caculate Previous Balence and New Deposit Amount
    const totalBalenceAmount = previousTotalBalence + newDepositAmount;
    // 1.7 Set Total Balence Witf setElementValueById
    setElementValueById('balence', totalBalenceAmount)
})