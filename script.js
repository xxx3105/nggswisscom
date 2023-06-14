


///////AUFGABE1
let betrag = 0;
function rechner() {
    
    betrag++;
     document.getElementById("betrag").innerHTML = betrag;


}

///////AUFGABE2
function readMore() {
    
let mehr = document.getElementById('mehr');
let knopf = document.getElementById('knopf');
    

if (mehr.style.display === 'none') {
     mehr.style.display = 'inline';
     knopf.innerHTML = 'Verstecken';
    
} else {
    mehr.style.display = 'none';
    knopf.innerHTML = 'Lesen';   
  }
}


///////AUFGABE3


function func() {

let num1 = Number(document.getElementById("num1").value);
     
    let rechnungen = (num1 * num1) * Math.PI;

    let result = `${rechnungen} m2`
 
    document.getElementById("result").innerHTML = result;

}

///////AUFGABE4 Advanced Exercise 1 (JS and HTML)
 
function knopf() {
 
let num2 = String(document.getElementById("num2").value);
    
    document.getElementById("farbe-von-text").style.color = `${num2}`
         

}

///////AUFGABE5 Expert Exercise 1 (JS and HTML)

// Write a function that takes two numbers as arguments.
// The function should return the greatest
// common divisor of these numbers

 
function diviserFinder() {
     
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
    var y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
    }
    
    return x
}
console.log(diviserFinder(8, 6))
console.log(diviserFinder(42, 56))
console.log(diviserFinder(96,132))
 
 
//     <!-- AUFGABE 6 -->
//     <!-- Write a function that calculates the
//     least common multiple of two numbers
// input as parameters.Write the result to the console. -- >
        
 

function functHelfer(n, m) {
  return m == 0 ? n : functHelfer(m, n % m);
}
function multipleFinder(n, m) {
  return n * m / functHelfer(n, m);
} 

console.log(multipleFinder(2, 3));
console.log(multipleFinder(4, 6));
console.log(multipleFinder(10, 20));




// //AUFGABE 1
// // Write a function that takes an array as a parameter.
// // The function should rearrange the array so
// // that the first element is at the end and all the other
// // elements shift one place to the front

// let b = [1,2,3,4,5]

// function transfer(numbers){
  
// let y = numbers.splice(1,6);

// let z = y.push(numbers[0])

// return y;
// }

// console.log(transfer(b));


// //AUFGABE 2

// // Write a function that takes an array as a parameter.
// // It should concatenate all items in the array
// // to a single string, separated by commas.
// // Output the result at the end with a console.log()

// let y = [1,2,"apple",4,"banana"];

// function pirog(words){

// let result = String(words);
  
// console.log(result);

// return result;
  
// }

// pirog(y)

// AUFGABE 3   24 05 23

// Use a for-loop to go through an array and add all array
// elements to a formatted HTML list.
// Create a button to display the list

  
 

let reflektorOfNumbers = document.getElementById("resultList");

let numbers = [1,2,3,4,5,5,515,1512,2525,152]; 

for (let number of numbers) {

  // reflektorOfNumbers.innerHTML = reflektorOfNumbers.innerHTML + `   • ${number} <br>`
  
  reflektorOfNumbers.innerHTML = reflektorOfNumbers.innerHTML + `<li> ${number}</li>`

}

function readMoreTwo() {
    
let mehr2 = document.getElementById('mehr2');
let knopf2 = document.getElementById('knopf2');
    

if (mehr2.style.display === 'none') {
     mehr2.style.display = 'inline';
     knopf2.innerHTML = 'Verstecken';
    
} else {
    mehr2.style.display = 'none';
    knopf2.innerHTML = 'Lesen';   
  }
}



////////////////

 


// AUFGABE 4   30 05 23

// Create an input element with a label and button. When pressing the button, add the input
// value to the list of Exercise 3. Clear the input field after the item has been added.
// Do not allow empty values to be added to the list

   
 
  let numbers1 = []; // collections

    function addNumber() {
      let enteredValue = String(document.getElementById("num3").value.trim());

      if (enteredValue !== '') {
        numbers1.push(enteredValue);

        let publisher = document.getElementById("resultList2");
        publisher.innerHTML = ''; 

        for (let number of numbers1) {
          publisher.innerHTML += `<li>${number}</li>`;
        }
      };
  }
    

 
//////////
// показать на странице х

// let x = 111;
// console.log(x);
// document.getElementById("resultList").innerHTML = x;


// AUFGABE 5   30 05 23

// Exercise 5 (JS and HTML)

// Create a clock with the setInterval() function you got to know today.
// Feel free to add styling to your liking.
// Suggestion of what the clock might look like

const interval = setInterval(myClock, 1000);

function myClock() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  document.getElementById('zeit').innerHTML = time;

}



// Aufgabe6 
// Advanced Exercise 1(p5js – Editor)
// Write a function that takes two arrays as an input parameter. It should find the unique 
// elements of these two arrays and return an array with the unique elements.

 
 
function checkGleichNummers(array1, array2) {
  let nichtGleich = array1.filter(x => !array2.includes(x));

  console.log(nichtGleich);

  return nichtGleich;

}

checkGleichNummers([1, 2, 3, 4, 15, 12, 2], [3, 4, 13, 0, 17, 12, 20])  

/////////////
var first = 10;

var second = 5;

var third = 3;

var fourth = "The result is "

var result = first / second + third;

console.log(result)

// //////////////
// var name = "Anna";
// var age = 20;
// if (age < 25) {
//   console.log("You are too young");
// }

// if (name != "Anna") {
//   console.log("Hello, how are you?");
// }


// var maximum = 5;
// var result = 0;

// for (var i = 0; i < maximum; i++) {
//   result = i;
// }

// console.log(result)

// var numbers2 = ["a", "b", "c", "d", "e", "f"];

// console.log(numbers2[1]);

// console.log(numbers2[numbers2.length - 1]);
///////////////
// var names = ["Tom", "Eva", "Sam", "Tina"];
 
// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }


// var first = 10;

// var second = 5;

// var third = 3;

// var fourth = "The result is "

// var result = first / second + third;

// console.log(fourth + (first + third))