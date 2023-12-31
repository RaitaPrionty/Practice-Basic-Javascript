// Problem:2   isJavaScriptFile

// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।


// Sample Data

// Input:// 'app.js'

// 'js.png'

// 'image.js.png'

// 'image.jpg.js'

// Output:// true

// false

// false

// true



function isJavaScriptFile(String){
    const jsFilePattern = /\.js$/i;
    var isJsFile = jsFilePattern.test(String);
    return isJsFile;
}
var filename = isJavaScriptFile("index.js");
console.log("index.js:", filename);


