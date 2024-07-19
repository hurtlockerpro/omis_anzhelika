let textInput = document.getElementById("TextInput");
let buttons = document.getElementsByClassName("btn");

let exceptions = ['NumpadDivide', 'NumpadMultiply', 'NumpadSubtract', 
  'NumpadAdd', 'Backspace']

//
/*                                  callback               
textInput.addEventListener('click', event => {
    alert('Hello')
})
*/

for (let index = 0; index < buttons.length; index++) {

  buttons[index].addEventListener('click', (event) => {
    // logic
    console.log(event.target.innerText);
    let btnTitle = event.target.innerText
    
    if (btnTitle == '='){
      getResult()
    } 
    else if (btnTitle == 'CE') 
    {
      emptyResult()
    }
    else 
    {
      
      if (isDoubleMathSign(btnTitle) == true)
      {
        textInput.value = textInput.value.slice(0, textInput.value.length - 1) + btnTitle
      } else {
        textInput.value += btnTitle
      }
      
    }
    textInput.focus()

    
  });

}

//textInput.addEventListener('click', function(event) {})

console.log(buttons);

/**
 * This function calculates result & insert it into text box
 */
function getResult(){
  textInput.value = eval(textInput.value) // evaluation
}

function emptyResult(){
  textInput.value = '' // number -> string
}


textInput.addEventListener('keydown', event => {

  console.log(event.key + ' - ' + event.code + ' - ' + event.keyCode);
    if (event.code == 'NumpadEnter' || event.code == 'Enter')
    {
      getResult()
      textInput.focus()
    } 
    else if (event.code == 'Digit' + event.key || 
      event.code == 'Numpad' + event.key || 
      exceptions.includes(event.code))
    {
      console.log('you pressed number/math');
      if (isDoubleMathSign(event.key) == true){
        event.preventDefault()  
      }
      textInput.focus()
    }
    else {
      event.preventDefault()
    }

})

/*
textInput.addEventListener('keydown', event => {
  console.log('keydown');
})

textInput.addEventListener('keypress', event => {
  console.log('keypress');
})
*/

function isDoubleMathSign(newSymbol)
{
  // check key code
  // get input last symbol
  // replace last symbol with new one 
  let lastSymbol = textInput.value.substring(textInput.value.length - 1)
  console.log('last: ' + lastSymbol);
  if (textInput.value.length >= 1 && isNaN(lastSymbol) == true && isNaN(newSymbol) == true){
    console.log('not a number'); // replace 
    return true
  }
  return false
}