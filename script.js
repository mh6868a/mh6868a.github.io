// alert("Hello World")
// sayHello(myName)

// var myName="Max"  
// var perfectSquare= 9;
// var isSunday=true;

// function sayHello(myName)
// {
//  alert("Hello " + myName)	
// }


var animals = document.getElementsByClassName("animal")
var bestAnimal = document.getElementById("best-animal")

function getBestAnimal(){
// get the user's favorite animal 
// store favorite animal as a variable
var fave = prompt("What is your favoirte animal?")
console.log(fave)

//if the value of fave is empty
if(fave ==''){
// do someething
bestAnimal= "Sloth"
bestAnimal.textContent=fave;
//if user deoes not enter animal
} else{ 
//do something else
console.log(fave)
console.log("best animal is " + bestAnimal)
bestAnimal.textContent=fave;
}

} 
getBestAnimal()