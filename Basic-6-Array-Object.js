// একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।

// অব্জজেক্টটি/Input দেখতে এমনঃ

// [

//     {name:'sakib', age:30},

//     {name:'samiul', age:20},

//     {name:'sahid', age:50},

//     {name:'samin', age:10}

// ]

// let arrayObject = [
//     var one = {name: "sakib", age: 30},
//    var two =  {name : "samiul", age: 20},
//    var three =  {name: "sahid", age: 50},
//     var four = {name: "samin", age: 10}
// ]
// function ObjectArray(objects){
   
// }
// var answer = ObjectArray(arrayObject);
// console.log(answer);

let shoppingcart = [
    {name: "Prionty", age: 30},
    {name: "Luna", age: 20},
    {name: "Raita", age: 10},
    {name: "Piu", age: 5},

]
function Age(array){
    var younger = array[0];
    for(let i = 0 ; i < array.length; i++){
        if(array[i].age < younger.age){
            younger = array[i];
        }
    }
    return younger;

}
var answer = Age(shoppingcart);
console.log(answer);
