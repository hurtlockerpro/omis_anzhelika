
// DOM - document object model 
let inputUsername = document.getElementById("email")
let inputPassord = document.getElementById("password")
let divTest = document.getElementById("test")

console.log(inputUsername);
console.log(inputPassord);
//        true                                     true
if (inputUsername.value.length == 0 && inputPassord.value.length == 0)
{
    console.log('Username/Password must be enetered!');
}
//                   10 <= 10
// x = 1
// x = x + '2'
// x = x + '3'
// x = x + '4'
/*
for (let index = 1; index <= 10; index++) {
    divTest.innerHTML += index + '<br>'
}*/

let cars = ['audi', 'bmw', 'citroen']


let select = document.getElementById("selectCars")
for (let index = 0; index < cars.length; index++) {
    
    let option = document.createElement('option') // <option></option>
    option.innerText = cars[index] // <option>{value}</option>


    select.innerHTML += option.outerHTML // <option>audi</option>
}

