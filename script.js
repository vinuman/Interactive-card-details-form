const right = document.querySelector('.right');
const form = document.querySelector('form');
const cardNumber = document.querySelector('.front-card h1');
const name = document.querySelector('.footer p');
const expDate = document.querySelector('.cvv-date');
const inputUserName = document.querySelector('#username');
const inputCardNumber = document.querySelector('#cardnumber');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const inputCVV = document.querySelector('#cvv');
const confirmButton = document.querySelector('button');
let thankYou = true;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const monthNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


//Function to check if a string has anything other than numbers
function hasNonNumericCharacters(str) {
    return /\D/.test(str);
  }

// Function to display the thank you card after submission
function thankYouCard(){
    form.style.display = 'none';
    right.innerHTML = `
    <div class=thank-you>
      <img src="icon-complete.svg" width="80" height="80">
      <h2>Thank you!</h2>
      <p>We’ve added your card details</p>
      <button class="btn">Continue</button>
    </div>
    `;
    document.querySelector('.thank-you').style.position = 'absolute';
    document.querySelector('.thank-you').style.top = '20%';
    document.querySelector('.thank-you').style.left = '60%';
    document.querySelector('.thank-you').style.width= '38rem';
    document.querySelector('.thank-you').style.display = 'flex';
    document.querySelector('.thank-you').style.flexDirection = 'column';
    document.querySelector('.thank-you').style.justifyContent = 'center';
    document.querySelector('.thank-you').style.alignItems = 'center';
    document.querySelector('.thank-you').style.paddingTop = '2rem';
    document.querySelector('.thank-you').style.paddingBottom = '2rem';
    document.querySelector('.thank-you h2').style.fontSize = '2.8rem';
    document.querySelector('.thank-you h2').style.paddingTop = '4rem';
    document.querySelector('.thank-you h2').style.textTransform = 'uppercase';
    document.querySelector('.thank-you p').style.fontSize = '1.8rem';
    document.querySelector('.thank-you p').style.opacity = '0.4';
    document.querySelector('.thank-you p').style.paddingBottom = '4rem';

    if(window.innerWidth<1080){
    document.querySelector('.thank-you').style.top = '35%';
    document.querySelector('.thank-you').style.left = '2%';
    document.querySelector('.thank-you').style.width= '90%';
    document.querySelector('.thank-you').style.display = 'flex';
    document.querySelector('.thank-you').style.flexDirection = 'column';
    document.querySelector('.thank-you').style.justifyContent = 'center';
    document.querySelector('.thank-you').style.alignItems = 'center';
    document.querySelector('.thank-you').style.paddingTop = '2rem';
    document.querySelector('.thank-you').style.paddingBottom = '2rem';
    document.querySelector('.thank-you h2').style.fontSize = '2.8rem';
    document.querySelector('.thank-you h2').style.paddingTop = '4rem';
    document.querySelector('.thank-you h2').style.textTransform = 'uppercase';
    document.querySelector('.thank-you p').style.fontSize = '1.8rem';
    document.querySelector('.thank-you p').style.opacity = '0.4';
    document.querySelector('.thank-you p').style.paddingBottom = '4rem';
    }
}

//Username input
inputUserName.addEventListener('input', (e)=>{
    e.preventDefault();
    name.textContent = inputUserName.value.trim();
    if(inputUserName.value.trim() !== ''){
        inputUserName.classList.remove('outline-red');
        inputUserName.nextElementSibling.classList.remove('show');
    }
});

//Card number input
inputCardNumber.addEventListener('input', (e)=>{
    e.preventDefault();
    if(inputCardNumber.value.trim().replace(/\s/g, '').length === 16){
        inputCardNumber.nextElementSibling.classList.remove('show');
        inputCardNumber.classList.remove('outline-red'); 
    }
    cardNumber.textContent = inputCardNumber.value;
    if(inputCardNumber.value.trim().length == 16){
        cardNumber.textContent = inputCardNumber.value.replace(/(.{4})/g, "$1 ");
    } 
});

//Month input
inputMonth.addEventListener('input', (e)=>{
    e.preventDefault();
    if(inputMonth.value<=12 && inputMonth.value!==''){
        inputMonth.nextElementSibling.classList.remove('show');
    }
    expDate.textContent = inputMonth.value.trim() + '/00';
})

//Year input
inputYear.addEventListener('input', (e)=>{
    e.preventDefault();
    if(inputYear.value !=='' && inputYear.value >= currentYear%100){
        inputYear.nextElementSibling.classList.remove('show');
    }
    expDate.textContent = inputMonth.value.trim() + '/' + inputYear.value.trim()
})

//CVV
inputCVV.addEventListener('input', (e)=>{
    e.preventDefault();
    if(inputCVV.value !== '' || inputCVV.value.trim().length===3){
        inputCVV.nextElementSibling.classList.remove('show');
    }
})


//CONFIRMTION BUTTON
confirmButton.addEventListener('click', (e)=>{
    e.preventDefault();
    thankYou = true;
    
    if(inputUserName.value.trim() === ''){
        inputUserName.classList.add('outline-red');
        inputUserName.nextElementSibling.classList.add('show');
        inputUserName.nextElementSibling.textContent = 'Can’t be blank';
        thankYou = false;  
    }

    if(inputCardNumber.value.trim().replace(/\s/g, '').length !== 16){
        inputCardNumber.nextElementSibling.classList.add('show');
        inputCardNumber.nextElementSibling.textContent = 'Please enter a valid number';
        inputCardNumber.classList.add('outline-red');
        thankYou = false;  
    }

    if(hasNonNumericCharacters(inputCardNumber.value.trim().replace(/\s/g, ''))){
        inputCardNumber.nextElementSibling.classList.add('show');
        inputCardNumber.nextElementSibling.textContent = 'Please enter a valid number';
        inputCardNumber.classList.add('outline-red');
        thankYou = false;  
    }

    if(inputMonth.value>12 || inputMonth.value==''){
        inputMonth.nextElementSibling.classList.add('show');
        inputMonth.nextElementSibling.textContent = 'Please enter a valid Month';
        thankYou = false;  
    }
    
   if(inputYear.value == currentYear%100 && inputMonth.value<monthNames[currentMonth]){
    inputMonth.nextElementSibling.classList.add('show');
    inputMonth.nextElementSibling.textContent = 'Please enter a valid Month';
    thankYou = false;  
   }

    if(inputYear.value =='' || inputYear.value<currentYear%100){
        inputYear.nextElementSibling.classList.add('show');
        inputYear.nextElementSibling.textContent = 'Please enter a valid year';
        thankYou = false;  
    }

    if(inputCVV.value == '' || inputCVV.value.trim().length<3){
        inputCVV.nextElementSibling.classList.add('show');
        inputCVV.nextElementSibling.textContent = 'Please enter a valid CVV';
        thankYou = false;  
    } 

    if (thankYou) {
        thankYouCard();
    }
    
});


