// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।
function StringReverse(name1, name2){
    // console.log(name1, name2);
    if(name1.length > name2.length){
        var name1Reverse = name1.split("").reverse().join("");
        return name1Reverse;
    }
    else{
        var name2Reverse = name2.split("").reverse().join("");
        return name2Reverse;
    }

}
var names = StringReverse("Prionty", "Raita");
console.log("the large name with reverse is:", names);