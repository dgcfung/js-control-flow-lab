// put code here!

var suggestVacation
var hotTemp
var northTrue
var chooseDestination
var destination

//let userName = confirm("What's your name?")
//console.log("Hi nice to meet you "+ userName + ".")

suggestVacation = confirm("Do you want us to suggest a vacation location for you?, \nPress OK for Yes, cancel for No")

while(suggestVacation==true){
    hotTemp = confirm ("Do you prefer hot or cold weather \nPress OK for hot, or cancel for cold")
    // hotTemp = prompt ("How warm do you want your destination to be? Please enter a number 1-10(1 = coldest, 10 =warmest")
    northTrue = prompt ("Do you prefer north or south weather \nPress 1 for north, or 2 for south")

    if (hotTemp && northTrue==1){
        var destination = prompt ("Please choose between Hong Kong and Miami or Orlando")
        if(destination == "Hong Kong"|| destination == "Miami"|| destination == "Orlando"){
            console.log(destination)
        }
    } else if(hotTemp && northTrue==2){
        var destination = prompt ("Please choose between Brazil and Indonesia or Phillipines")
        if(destination != "Brazil"|| destination != "Indonesia"|| destination != "Phillipines"){
            console.log(destination)
        }
    } else if(!hotTemp && northTrue==1){
        var destination = prompt ("Please choose between Moscow and North Pole or New York")
        if(destination != "Moscow"|| destination !="North Pole"|| destination != "New York"){
            console.log(destination)
        }
    }else if(!hotTemp && northTrue==2){
        var destination = prompt ("Please choose between Antarctica and Sydney and Melbourne")
        if(destination != "Antarctica"|| destination != "Sydney"|| destination != "Melbourne"){
            console.log(destination)
        }else{
            console.log("Enter valid replies.")
        }
    }
    alert("We suggest you take a vacation in " + destination)
    suggestVacation = confirm("Do you want us to suggest another vacation destination? \nPress OK for Yes, or cancel for No")
}




// if (hotTemp == "hot"|| "cold"){

//     northTrue = confirm ("Do you want to fly north or south?")

// }else{
//     alert ("Please enter valid entry")
// }

// if (northTrue == "north"|| "south"){
//     chooseDestination = confirm ("Choose Destination")
// }else{
//     alert ("Please enter valid entry")
// }

// let validEntry

// hotTemp = confirm ("Do you prefer hot or cold weather?")

// if (hotTemp == "hot"){
//     northTrue = confirm ("Do you want to fly north or south?")
//     if(northTrue= "north"){
//         chooseDestination = confirm("Choose Hong Kong or Florida.")

//     }

// }else if(hotTemp== "cold"){
//     northTrue = confirm ("Do you want to fly north or south?")
// }else{
//     console.log("Please enter hot or cold.")
// }

// if (northTrue == "north"){

// }else if(no{

// }else{

// }

// let something = false

// while(something == false ){
//     // do things
//     something = confirm('yes or no')
// }




// //while (hotTemp == "hot" ||  hotTemp == "cold") {
//     if (hotTemp == "hot"){
//         var northSouthHot= confirm("Do you want to go Northern or Southern Hemisphere?")
//     } else if (hotTemp == "cold") {
//         var northSouthCold= confirm("Do you want to go Northern or Southern Hemisphere?")
//     } else {
//     console.log("Are you sure you didn't misspell?")
//     }
// //}

//if (northSouthHot== "Northern"){

//}



// var hotTemp  confirm()
// hotTemp.toString()

// let vacationDestination = confirm()

//