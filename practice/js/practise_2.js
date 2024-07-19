
let alertSuccess = document.getElementById('alert-success')
let alertDanger = document.getElementById('alert-danger')
let inputNumber = document.getElementById('inputNumber')
let button = document.querySelector('button[type="button"]')

function getRandomNumber(startNumber, endNumber)
{
    const range = endNumber - startNumber + 1;
    return Math.floor(Math.random() * range) + startNumber;
}

let randomNumber = getRandomNumber(1, 10)
console.log('random number is: ' + randomNumber);

button.addEventListener('click', event => {
    // success
    if (inputNumber.value == randomNumber)
    {
        alertSuccess.innerText = 'You guessed the number'
        alertSuccess.classList.remove('d-none')
        setTimeout(() => {
            alertSuccess.classList.add('d-none')
        }, 4000);
    } else {
        alertDanger.innerText = 'You are wrong!'
        alertDanger.classList.remove('d-none')
        setTimeout(() => {
            alertDanger.classList.add('d-none')
        }, 4000);
    }
})

// 
let link = document.getElementById('w3r')
console.log(link);
//console.log(link.href);
for (let index = 0; index < link.attributes.length; index++) {
    console.log(link.attributes[index].value);
    
}

// 
let select = document.getElementById('mySelect')
console.log(select.value);

function getStartIndex(){
    for (let index = 0; index < select.children.length; index++) {
        if (select.value == select.children[index].value){
            return index
        }
    }
    return 0 // default
}

select.addEventListener('change', event => {
    let selectedOptionIndex = getStartIndex()
    console.log(select.remove(selectedOptionIndex));
})