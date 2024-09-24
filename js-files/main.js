// added function for donation button and history button 

// noakhali Fund section  
document.getElementById('btn-noakhali-donate')
    .addEventListener('click', function(event){
        event.preventDefault();

    const compareMainBalance = getTextFieldValueByIdfromMainBalance('main-balance')

    const addMoneyNoakhali = getInputFieldValueById('noakhali-input-money');
    if(addMoneyNoakhali<compareMainBalance && !isNaN(addMoneyNoakhali) && addMoneyNoakhali !== '' && addMoneyNoakhali !== null && addMoneyNoakhali>=0){
        const noakhaliFund = getTextFieldValueById('noakhali-donate-fund');
        const totalFund = addMoneyNoakhali + noakhaliFund;
        const mainBalance = getTextFieldValueByIdfromMainBalance('main-balance');
        const deductedBalance= mainBalance-addMoneyNoakhali;
        document.getElementById('main-balance').innerText = deductedBalance;
        document.getElementById('noakhali-donate-fund').innerText = totalFund;

        const dateTime = updateTime();
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border-2 rounded-md my-5 p-2 max-w-screen-lg mx-auto">Donated: ${addMoneyNoakhali} tk. to Noakhali people
                <div>Time: ${dateTime.time}</div>
                <div>Date: ${dateTime.date}</div>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div)
        
    }else{
        alert('Failed to donate, please try again!!');
        return;
    }
})