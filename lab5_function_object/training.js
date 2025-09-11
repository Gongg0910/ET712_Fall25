/* 
Gonzalo Guerra
Lab 5, more about functions, Object
Sep 11, 2025 
*/
console.log("Gonzalo Guerra");
// annonymous function in a variable
let greet = function(username){
    console.log(`Welcome to function ${username}`)
}

// arrow function
let greeting = (username)=>{
    console.log(`Good afternoon ${username}`)
}

// EXAMPLE 2: default parameters
// randomly generated a number between 1 and 9
// function will pass the amount of time that the number will be generated
function rand_number(x){
    for(let n = 1; n <= x; n++){
        let num = Math.ceil(Math.random() * 9)
        console.log(`${num}`)
    }
}

// EXAMPLE 3: spread suntax ...
numbers = [2, 0, -10, 5, 8, -9]
let max_number = Math.max(...numbers)
console.log(`\n---- Example 3: spread ----`)
console.log(`The maxinum number is = ${max_number}`)


// create an object 'car'    // car.car_description()
const car = {
    // properties
    type: "Flat",
    model: "500",
    color: "white",

    // method
    car_description : function(){
        return `Car type = ${this.type}, ${this.model}, car color = ${this.color}`
    }
}

// EXAMPLE 5
// create an object `myMath` that will calculate the perimeter or the area rectangle
const myMath = {
    // methods                 // myMath.perimeter(1,4)
    perimeter : function(w,l) {return (2*w) + (2*l)},
    area : function(w = 0, l = 0) {return w*l}
    
}

// EXAMPLE 6
const cat = {
    // properties
    name: "Mickey",
    color: "Black with white spots",
    breed: "unknown",

    // method     // cat.meow()
    meow: ()=>(console.log("MEOW MEOW MEOW"))
}


// EXAMPLE 7 
const hen = {
    // properties       hen.eggCount
    name : "Helen",
    eggCount : 0,

    // method 
    layAnEgg(){
        this.eggCount++
        return `${this.name} lays an egg`
    },
    resetEggCount(){
        this.eggCount = 0
        return `${this.name} egg count = ${this.eggCount}`
    }
}

// Example 8     yell("hello \n")
function yell(message = ""){
    try{
        console.log(message.toUpperCase().repeat(3))
    }
    catch(error){
        console.log(error)
        console.log(`Please pass a string next time!`)
    }
}

// Lab EXERCISE 1 description (JS object):
const mycalculator = {
    // property 
    message: "",
    side : 2,

    // method      mycalculator.area_square()
    area_square(){
        return`square ${Math.pow(this.side,2)}`

    }


}




