// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।


// Sample Data:

// Input
// { name: "abul", friend: "babul" },

// { name: "babul", friend: "abul" }


// { name: "abul", friend: "kabul" },

// { name: "kabul", friend: "sabul" }


// { name: "doe", friend: "alex" },

// { name: "john", friend: "doe" }



// Output
// true




// false





// false

// no-1
function isBestFriend(name1, name2){
    if(obj1.name === obj2.friend && obj2.name === obj1.friend){
        return true;
    }
    else{
        return false;
    }

}
var obj1 = { name: "abul", friend: "babul" };
var obj2 = { name: "babul", friend: "abul" }
var Answer = isBestFriend(obj1,obj2);
console.log("abul & babul are bestfriend:", Answer);

// no-2
function isBestFriend2(nameOne, nameTwo){
    if(objectOne.name === objectTwo.friend && objectOne.friend === objectTwo.name){
        return true;
    }
    else{
        return false;
    }

}
var objectOne = { name: "doe", friend: "alex" };
var objectTwo = { name: "john", friend: "doe" };
var answer = isBestFriend2(objectOne, objectTwo);
console.log("doe & alex are bestfriend:", answer);





