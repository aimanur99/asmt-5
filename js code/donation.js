console.log("donation.js loaded");

//Calculate for Noakhali 

document.getElementById("btn-noakhali").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Noakhali button clicked');
    
    const inputDonation = getInputFieldValueById("input-noakhali");
    console.log('Add input donation', inputDonation);

    //validation
    if (isNaN(inputDonation) || inputDonation <= 0) {
        alert("Please enter a valid donation amount.");
        
    }
    else {
        alert("Thank you for your donation to Noakhali!");
    }
    // Get the current amount from the text field
    const noakhaliAmount = getTextFieldValueById("noakhali-amount");
    const topAmount = getTextFieldValueById("top-amount");
    console.log(noakhaliAmount, topAmount);
    // Calculate the new amount
    const newNoakhaliAmount = noakhaliAmount + inputDonation;
    const newTopAmount = topAmount + inputDonation;
    console.log(newNoakhaliAmount, newTopAmount);

    document.getElementById("noakhali-amount").innerText = newNoakhaliAmount;
    document.getElementById("top-amount").innerText = newTopAmount;
    // Clear the input field after donation
    document.getElementById("input-noakhali").value = "";
    
    // Update the donation history  
    const p = document.createElement("p");
    p.innerText = `${newNoakhaliAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh`;
    document.getElementById("noakhali-history").appendChild(p);
    p5.innerText = `${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`;
    document.getElementById("noakhali-history").appendChild(p5);
    p2.innerText = `${new Date().toLocaleDateString()}`;
    document.getElementById("noakhali-history").appendChild(p2);
    p3.innerText = `${new Time().toLocaleTimeString()}`;
    document.getElementById("noakhali-history").appendChild(p3);
    p4.innerText = `GMT +06:00 (Bangladesh Standard Time)`;
    document.getElementById("noakhali-history").appendChild(p4);
    

});

//Calculate for Feni
document.getElementById("btn-feni").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Feni button clicked');
    
    const inputDonation = getInputFieldValueById("input-feni");
    console.log('Add input donation', inputDonation);

    //validation
    if (isNaN(inputDonation) || inputDonation <= 0) {
        alert("Please enter a valid donation amount.");
        
    }
    else {
        alert("Thank you for your donation to Noakhali!");
    }
    // Get the current amount from the text field
    const feniAmount = getTextFieldValueById("feni-amount");
    const topAmount = getTextFieldValueById("top-amount");
    console.log(feniAmount, topAmount);
    // Calculate the new amount
    const newFeniAmount = feniAmount + inputDonation;
    const newTopAmount = topAmount + inputDonation;
    console.log(newFeniAmount, newTopAmount);

    document.getElementById("feni-amount").innerText = newFeniAmount;
    document.getElementById("top-amount").innerText = newTopAmount;
    // Clear the input field after donation
    document.getElementById("input-feni").value = "";
    
    // Update the donation history  
    const p = document.createElement("p");
    p.innerText = `${newFeniAmount} Taka is Donated for famine-2024 at Feni, Bangladesh`;
    document.getElementById("feni-history").appendChild(p);
    p3.innerText = `${new Time().toLocaleTimeString()}`;
    document.getElementById("feni-history").appendChild(p3);
    p2.innerText = `${new Date().toLocaleDateString()}`;
    document.getElementById("feni-history").appendChild(p2);
    p4.innerText = `GMT +06:00 (Bangladesh Standard Time)`;
    document.getElementById("feni-history").appendChild(p4);
    p5.innerText = `${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`;
    document.getElementById("feni-history").appendChild(p5);
    

});

//Calculate for Quota Movement
document.getElementById("btn-quota").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Quota button clicked');
    
    const inputDonation = getInputFieldValueById("input-quota");
    console.log('Add input donation', inputDonation);

    //validation
    if (isNaN(inputDonation) || inputDonation <= 0) {
        alert("Please enter a valid donation amount.");
        
    }
    else {
        alert("Thank you for your donation to Noakhali!");
    }
    // Get the current amount from the text field
    const quotaAmount = getTextFieldValueById("quota-amount");
    const topAmount = getTextFieldValueById("top-amount");
    console.log(quotaAmount, topAmount);
    // Calculate the new amount
    const newQuotaAmount = quotaAmount + inputDonation;
    const newTopAmount = topAmount + inputDonation;
    console.log(newQuotaAmount, newTopAmount);

    document.getElementById("quota-amount").innerText = newQuotaAmount;
    document.getElementById("top-amount").innerText = newTopAmount;
    // Clear the input field after donation
    document.getElementById("input-quota").value = "";
    
    // Update the donation history  
    const p = document.createElement("p");
    p.innerText = `${newQuotaAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    document.getElementById("quota-history").appendChild(p);
    p5.innerText = `${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`;
    document.getElementById("quota-history").appendChild(p5);
    p2.innerText = `${new Date().toLocaleDateString()}`;
    document.getElementById("quota-history").appendChild(p2);
    p3.innerText = `${new Time().toLocaleTimeString()}`;
    document.getElementById("quota-history").appendChild(p3);
    p4.innerText = `GMT +06:00 (Bangladesh Standard Time)`;
    document.getElementById("quota-history").appendChild(p4);
    

});

//
document.getElementById('history-btn').addEventListener('click', function(){
    // event.preventDefault();
        //hide all sections
    
        document.getElementById('history-btn').classList.add('btn-history');
        document.getElementById('donation-btn').classList.remove('btn-donation');
        document.getElementById('noakhali-card').classList.add('hidden');
        document.getElementById('noakhali-card').classList.remove('lg:flex');
        document.getElementById('feni-card').classList.add('hidden');
        document.getElementById('quota-card').classList.add('hidden');
        document.getElementById('history-card').classList.remove('hidden');
        // document.getElementById('history-card').classList.add('lg:flex');
    
});
document.getElementById('donation-btn').addEventListener('click',function(){
    const historyButton= document.getElementById('history-btn').classList.remove('btn-history');
    const donationButton = document.getElementById('donation-btn').classList.add('btn-donation');
    const noakhaliSection = document.getElementById('noakhali-card').classList.remove('hidden');
    const feniSection = document.getElementById('feni-card').classList.remove('hidden');
    const quotaSection = document.getElementById('quota-card').classList.remove('hidden') ;
    const historySection = document.getElementById('history-card').classList.add('hidden');
})


//
// Start blog btn here----->
document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href='./blog.html'
})

// Start home button here ------>
// document.getElementById('btn-home').addEventListener('click',function(){
//     console.log('Home button clicked');
//     window.location.href='./index.html'
// })
