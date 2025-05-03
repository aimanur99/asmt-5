console.log("function.js loaded");

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

//Another function to get the input field value by id
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

//show selected donation amount in the input field

//Button 
// function showSectionById(id){
//     //hide all sections

//     document.getElementById('history-btn').classList.add('btn-history');
//     document.getElementById('donation-btn').classList.remove('btn-donation');
//     document.getElementById('noakhali-card').classList.add('hidden');
//     document.getElementById('noakhali-card').classList.remove('lg:flex');
//     document.getElementById('feni-card').classList.add('hidden');
//     document.getElementById('quota-card').classList.add('hidden');
//     document.getElementById('history-card').classList.remove('hidden');

    
// }

// document.getElementById('donation-btn').addEventListener('click',function(){
//     const historyButton= document.getElementById('history-btn').classList.remove('btn-history');
//     const donationButton = document.getElementById('donation-btn').classList.add('btn-donation');
//     const noakhaliSection = document.getElementById('noakhali-section').classList.remove('hidden');
//     const feniSection = document.getElementById('feni-section').classList.remove('hidden');
//     const quotaSection = document.getElementById('quota-section').classList.remove('hidden') ;
//     const historySection = document.getElementById('history-section').classList.add('hidden');
// })



