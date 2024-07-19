// 

let result = document.getElementById('result')
let word = 'w3resource'

let endIndex = word.length - 1 // 
let startIndex = -1

let rightToLeft = true
let leftToRight = false




//         callback      int 
setInterval(() => {
    //result.innerText += (i++)

    if (endIndex >= 0 && rightToLeft == true)
    {
        result.innerText += word[endIndex--]
        console.log(word[endIndex], endIndex);
        if (endIndex == 0) {
            rightToLeft = false
            leftToRight = true
        }
    } 

    if (startIndex <= word.length && leftToRight == true)
    {   
        result.innerText += word[startIndex++]
        console.log(word[startIndex]);
        if (startIndex == word.length) {
            rightToLeft = true
            leftToRight = false
        }
    }
    
    if (endIndex == 0 || startIndex == word.length)
    {
        result.innerText = ''
        endIndex = word.length - 1
    }

}, 1000); // 1s = 1000 mls

/*
setTimeout(() => {
    result.innerText = 'Hello timeout'
}, 4000);
*/

//for (let index = 0; index < word.length; index++) {  
/*
for (let index = word.length; index >= 0; index--) {  
    console.log(word[index]);
}*/

