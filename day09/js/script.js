// var myCar = {
//   make: 'jeep',
//   model: 'wrangler',
//   year: '2014'
// };
//
// var myOtherCar = {
//   make: 'jeep',
//   model: 'wrangler',
//   year: '1997'
// };x
//
// function Car(make, model, year, colour){
//   this.doors = 2;
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.colour = colour;
// }
//
// var myJeep = new Car('jeep', 'wrangler', 2014, 'black')
// var myOtherJeep = new Car('jeep', 'wrangler', 1997, 'red');
//
//
// console.log(myCar);
// console.log(myJeep);
// console.log(myOtherJeep);



// function Person(height, age, eyeclr, hairclr, personality){
//   this.height = height;
//   this.age = age;
//   this.eyeclr = eyeclr;
//   this.hairclr = hairclr;
//   this.personality = personality;
// }
//
// var stranger = new Person('6ft', 34, 'brown', 'red', 'calm');
// var anotherStranger = new Person('4ft', 203, 'black', 'white', 'mysterious');
//
// console.log(stranger);
// console.log(anotherStranger);


// SET TIMER
// function sayHello(){            //
//   alert('hello');               //   1
// }                               //
//
// function delay(){               //
//   setTimeout(sayHello, 4000)    //   2
// }                               //


// setInterval                                 //
// var greeting = setInterval(sayHi, 500);     //
// var greet = 0;                              //
// function sayHi(){                           //  3
//   greet++                                   //
//   console.log(`Hi ${greet}`);               //
// }

var btns = document.querySelectorAll('button'); //
var timer; //
for (let btn of btns) { //
    btn.addEventListener('mouseover', function(evt) { //
        console.log(this); //
        timer = setTimeout(function() { //
            getBtn(evt); //
        }, 1000); //
    }); //  4
    btn.addEventListener('mouseout', function(evt) { //
        clearTimeout(timer); //
    }); //
} //
//
function getBtn(evt) { //
    console.log(evt); //
    evt.target.style.color = 'magenta' //
    evt.target.style.fontSize = '200%' //
} //