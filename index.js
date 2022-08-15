document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositValue = depositField.value;
    const depositMain = parseFloat(depositValue);
    
    const depositBalance = document.getElementById('deposit-balance');
    const depositBalanceConvert = depositBalance.innerText;
    const depositBalanceshow = parseFloat(depositBalanceConvert);

    depositBalance.innerText = depositMain + depositBalanceshow;

    const mainBalance = document.getElementById('main-balance');
    const mainBalanceText = mainBalance.innerText;
    const balanceConvert = parseFloat(mainBalanceText);

    const newBal = balanceConvert + depositMain ;
    mainBalance.innerText = newBal;

    // clear value 

    depositField.value = ' ';
})

document.getElementById('withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawText = withdrawField.value;
    const withdrawTextConvert = parseFloat(withdrawText);

    const displayWithdraw = document.getElementById('withdraw-display');
    const displayText = displayWithdraw.innerText;
    const displayConvert = parseFloat(displayText);
    displayWithdraw.innerText = withdrawTextConvert + displayConvert;

    const getBalance = document.getElementById('main-balance');
    const getBalanceText = getBalance.innerText;
    const balanceConvert = parseFloat(getBalanceText);

    getBalance.innerText = balanceConvert - withdrawTextConvert;

    withdrawField.value = ' ';



})

























