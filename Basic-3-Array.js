// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]
// আউটপুটঃ 3

let array = [-1,2,-3,4,5,6,-7,8,-9,10];

function Greaterthan5(numbers){
    var newArray = [];
   for(var i = 0; i < numbers.length; i++){
    var index = i;
    var elements = numbers [i];
    console.log("index & elements are:", index, elements);
    if(elements > 5 ){
        // console.log(elements, index);
        newArray.push(elements);
       
       
    }
   }
   console.log("the newArray is:", newArray);
   return newArray.length;
}
var answer = Greaterthan5(array);
console.log("count of the numbers of greater than 5:", answer);