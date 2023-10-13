// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।

// 1 millileater = 0.001 leater

function MilliliterToLeater(Milliliter){
var leater = Milliliter * 0.001;
var answer = Milliliter +  " millileater " +  " = " +  leater + " leater ";
return answer;
}
var numberML = MilliliterToLeater(5);
console.log(numberML);