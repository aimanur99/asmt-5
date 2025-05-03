console.log("home.js loaded");

document.getElementById("btn-home").addEventListener('click',function(){
    console.log('Home button clicked');
    window.location.href='./index.html';
})