

let x = 10 // number
// x = "text" // string

// typeof
console.log("Hello console");
console.log(typeof dfsdx) 
let y = 10 / '0'

let firstname = 'vladimir'

console.log('Hello ' + firstname);
console.log(2 + 2);


let u = undefined
let n = null
let b = true  // boolean -> true false
let o1 = [] // object -> array -> multiple values
let o2 = {} // object -> array -> multiple values


// logic
x = 100

// && AND - и
// true && true && false && true -> false

// ||  OR - или
// false || false ||false || true -> true

//    true
if (x != 10 && x >= 110 && x == 5 && x >= 10){
    console.log('x >= ' + x );
}
else {
   console.log('something else'); 
}


//
let z = 10 

//            0       1       2
let cars = ['audi', 'bmw', 'citroen']

// ++ increment 
// -- decrement

// READ
//                      true
for (let index = 0; index < cars.length; index++) {
  console.log(cars[index]); 
}

// WRITE
cars[2] = 'volvo'

for (let index = 0; index < cars.length; index++) {
    cars[index] = 'car ' + (index + 1)
    console.log(cars[index]); 
}


// function 

// returnable 
function multiply(x = 1, y = 1, ...z){

    // var 1 
    // return x * y

    // var 2
    let result = x * y
    //console.log(result);

    for (let index = 0; index < z.length; index++) {
        result *= z[index]
    }
    return result
}

//let result2 = multiply(2, 5)