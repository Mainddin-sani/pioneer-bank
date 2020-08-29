// button event handelar
const login = document.getElementById('login');
login.addEventListener('click', function(){
    const formArea = document.getElementById('main-form');
    formArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});



// deposit event handelar
const depositButton = document.getElementById('depositButton');
    depositButton.addEventListener('click', function(){
        // const depostAmount = document.getElementById('depositAmount').value;
        // const depositNumber = parseFloat(depostAmount);
        const depositNumber = getInput('depositAmount');
        
        uptoDateNumber('depositBalance', depositNumber);
        uptoDateNumber('currentBalacne', depositNumber);
        
        document.getElementById('depositAmount').value = "";

});

// withdraw button hanler 
const btnwithdraw = document.getElementById('withdraw');
btnwithdraw.addEventListener('click', function(){
    const withdrawNumber = getInput('withdrawAmount');

    uptoDateNumber('withdrawNumberW', withdrawNumber);
});


function getInput(id){
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    document.getElementById('withdrawAmount').value = "";
    return withdrawNumber;
}
function uptoDateNumber(id, depositNumber){
    const depositBalance = document.getElementById(id).innerText;
        const currentDepostNumber = parseFloat(depositBalance);
        const toTaldepsot = depositNumber + currentDepostNumber;
        document.getElementById(id).innerText = toTaldepsot;
}