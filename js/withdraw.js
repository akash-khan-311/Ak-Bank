/*=======================================
=============Table Of Contents==========
======================================== 
//! 1. Add Event Listener On Withdraw Button
1.1 Get The Value of input with id
1.2 Get The Previous Withdraw Amouont with getTextElementById
1.3 Calculate Previous withdraw Amount and new withdraw amount
1.4 Set total withdraw amount with setElementValueById
1.5 Get total balence amount with getTextElementById
1.6 Calculate Previous Total Balence And New Withdraw Amount
1.7 set total Balence with setElementValueById
=============================================================
*/

document.getElementById('withdraw-btn').addEventListener('click', function () {
  // 1.1 Get The Value of input with id
  const newWithdrawAmount = getInputValueById('withdraw-feild');
  // 1.2 Get The Previous Withdraw Amouont with getTextElementById
  const previousWithdrawAmouont = getTextElementById('withdraw-amount');
  //1.3 Calculate Previous withdraw Amount and new withdraw amount
  const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmouont;
  //1.4 Set total withdraw amount with setElementValueById
  setElementValueById('withdraw-amount', totalWithdrawAmount)
  //1.5 Get total balence amount with getTextElementById
  const previousTotalBalenceAmount = getTextElementById('balence');
  //1.6 Calculate Previous Total Balence And New Withdraw Amount
  const newTotalBalenceAmouont = previousTotalBalenceAmount - newWithdrawAmount;
  //1.7 set total Balence with setElementValueById
  setElementValueById('balence', newTotalBalenceAmouont)
})