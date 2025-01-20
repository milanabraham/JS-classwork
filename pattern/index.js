// let playerinfo = [
//     {name : 'milan' , score : 20},
//     {name : 'alan' , score : 40},
//     {name : 'albin' , score : 80},
// ]

// const returnValue = playerinfo.find((element) => {
//     console.log(element)
//     if(element.score > 70){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(returnValue.name);



//  sorting array in aces and desc order a-b and b-a 

// const arr = [2,5,6,7,1,4,100,200,41]

// let arrSort = arr.sort((a,b) => b - a)  

// console.log(arrSort)


// ******** string class  ************

// let message = "how are you dude"
// let count = console.log(message.length);
// let upper = console.log(message.toUpperCase())
// let search = console.log(message.search('are y'));
// let replace = console.log(message.replace('are', 'myre'));


// ******** objects in js ******** 

const person = {
    firstName : "milan",
    lastName : "abraham",
    age : 21,
    hobbies : ["solving dsa","gamer","myran"],
    'is male' : true,
    greet : function(){
        console.log(`My name is ${this.firstName} and my age is ${this.age}` ); 
    }
}

// console.log(person.greet());


// for(abc in person){
//     console.log(abc + ":" + person[abc])
// }

// ********* JSON *********

