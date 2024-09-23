// noakhali Fund section  
document.getElementById('btn-noakhali-donate')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoneyNoakhali = getInputFieldValueById('noakhali-input-money');
        if( !isNaN(addMoneyNoakhali) && addMoneyNoakhali !== '' && addMoneyNoakhali !== null){
            const noakhaliFund = getTextFieldValueById('noakhali-donate-fund');
            const totalFund = addMoneyNoakhali + noakhaliFund;
            const mainBalance = getTextFieldValueByIdfromMainBalance('main-balance');
            const deductedBalance= mainBalance-addMoneyNoakhali;
            document.getElementById('main-balance').innerText = deductedBalance;
            document.getElementById('noakhali-donate-fund').innerText = totalFund;
            console.log(totalFund)
        }else{
            alert('Failed to donate, please try again!!');
            return;
        }
        console.log(addMoneyNoakhali)

        // console.log(addMoneyNoakhali)
    })