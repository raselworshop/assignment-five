
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
        // total balnces
        document.getElementById('main-balance').innerText = deductedBalance;
        document.getElementById('noakhali-donate-fund').innerText = totalFund;

        // added function for donation button and history button 
        const dateTime = updateTime();
        const headerText = document.getElementById('header-text')
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border-2 rounded-md my-5 p-2 max-w-screen-lg mx-auto">
            ${addMoneyNoakhali} tk ${headerText.innerText} .
                <div>Time: ${dateTime.time}</div>
                <div>Date: ${dateTime.date}</div>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);
        my_modal_5.showModal();
        
    }else{
        alert('Failed to donate, please try again!!');
        return;
    }
})

// Donate for Flood Relief in Feni,Bangladesh
document.getElementById('btn-feni-donate')
    .addEventListener('click', function(event){
        event.preventDefault();

    const compareMainBalance = getTextFieldValueByIdfromMainBalance('main-balance')

    const addMoneyFeni = getInputFieldValueById('feni-input-money');
    if(addMoneyFeni<compareMainBalance && !isNaN(addMoneyFeni) && addMoneyFeni !== '' && addMoneyFeni !== null && addMoneyFeni>=0){
        const feniFund = getTextFieldValueById('feni-donate-fund');
        const totalFund = addMoneyFeni + feniFund;
        const mainBalance = getTextFieldValueByIdfromMainBalance('main-balance');
        const deductedBalance= mainBalance-addMoneyFeni;
        // total balnces
        document.getElementById('main-balance').innerText = deductedBalance;
        document.getElementById('feni-donate-fund').innerText = totalFund;

        // added function for donation button and history button 
        const dateTime = updateTime();
        const headerText = document.getElementById('header-text-feni')
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border-2 rounded-md my-5 p-2 max-w-screen-lg mx-auto">
            ${addMoneyFeni} tk ${headerText.innerText} .
                <div>Time: ${dateTime.time}</div>
                <div>Date: ${dateTime.date}</div>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);
        my_modal_4.showModal()
        
    }else{
        alert('Failed to donate, please try again!!');
        return;
    }
})

// Aid for Injured in the Quota Movement
document.getElementById('btn-protest-donate')
    .addEventListener('click', function(event){
        event.preventDefault();

    const compareMainBalance = getTextFieldValueByIdfromMainBalance('main-balance')

    const addMoneyProtest = getInputFieldValueById('protest-input-money');
    if(addMoneyProtest<compareMainBalance && !isNaN(addMoneyProtest) && addMoneyProtest !== '' && addMoneyProtest !== null && addMoneyProtest>=0){
        const protestFund = getTextFieldValueById('protest-donate-fund');
        const totalFund = addMoneyProtest + protestFund;
        const mainBalance = getTextFieldValueByIdfromMainBalance('main-balance');
        const deductedBalance= mainBalance-addMoneyProtest;
        // total balnces
        document.getElementById('main-balance').innerText = deductedBalance;
        document.getElementById('protest-donate-fund').innerText = totalFund;

        // added function for donation button and history button 
        const dateTime = updateTime();
        const headerText = document.getElementById('header-text-protest')
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border-2 rounded-md my-5 p-2 max-w-screen-lg mx-auto">
            ${addMoneyProtest} tk ${headerText.innerText} .
                <div>Time: ${dateTime.time}</div>
                <div>Date: ${dateTime.date}</div>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);
        my_modal_3.showModal();
        
    }else{
        alert('Failed to donate, please try again!!');
        return;
    }
})

// donate for child section
document.getElementById('btn-child-donate')
    .addEventListener('click', function(event){
        event.preventDefault();

    const compareMainBalance = getTextFieldValueByIdfromMainBalance('main-balance')

    const addMoneyChild = getInputFieldValueById('child-input-money');
    if(addMoneyChild<compareMainBalance && !isNaN(addMoneyChild) && addMoneyChild !== '' && addMoneyChild !== null && addMoneyChild>=0){
        const childFund = getTextFieldValueById('child-donate-fund');
        const totalFund = addMoneyChild + childFund;
        const mainBalance = getTextFieldValueByIdfromMainBalance('main-balance');
        const deductedBalance= mainBalance-addMoneyChild;
        // total balnces
        document.getElementById('main-balance').innerText = deductedBalance;
        document.getElementById('child-donate-fund').innerText = totalFund;

        // added function for donation button and history button 
        const dateTime = updateTime();
        const headerText = document.getElementById('header-text-child')
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border-2 rounded-md my-5 p-2 max-w-screen-lg mx-auto">
            ${addMoneyChild} tk ${headerText.innerText} .
                <div>Time: ${dateTime.time}</div>
                <div>Date: ${dateTime.date}</div>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);
        my_modal_2.showModal()
        
    }else{
        alert('Failed to donate, please try again!!');
        return;
    }
})