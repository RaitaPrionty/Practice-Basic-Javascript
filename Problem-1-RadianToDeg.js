// Problem:1   radianToDegree

// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।


// Sample Data:

// Input: // 10

// 25

// 199

// Output:// 572.96

// 1432.39

// 11401.86


// 1 radian = 57.2958 degree.

function  radianToDegree (radian){
    const degree = radian * 57.2958;
    // console.log(degree);
    var answertodegree = radian + " radian " + " = " + degree.toFixed(2) + " degree ";
    return answertodegree;

}
var answer = radianToDegree(10);
var answer2 = radianToDegree(25);
var answer3 = radianToDegree(199);
console.log("ans-1:", answer);
console.log("answer-2:", answer2);
console.log("ans-3:", answer3);






