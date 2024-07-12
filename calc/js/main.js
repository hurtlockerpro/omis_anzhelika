let textInput = document.getElementById("TextInput");
let buttons = document.getElementsByClassName("btn");

//
/*                                  callback               
textInput.addEventListener('click', event => {
    alert('Hello')
})
*/

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", (event) => {
    console.log(event.target.innerText);
  });
}

//textInput.addEventListener('click', function(event) {})

console.log(buttons);
