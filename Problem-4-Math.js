// Problem 4:  publicBusFare


// একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।


// উদাহরণ১ঃ


//  যদি ১১৭ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।


// উদাহরণ২ঃ


//  যদি ২৩৫ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
// Sample Data
// input:
// 50

// 55

// 112

// 235

// 365

// output:
// 0

// 1250

// 250

// 500

// 1000

function publicBusFare(PeopleGo){
    let perbuspeople = 50;
    let bus = 2;
    let totalPeopleInBus = perbuspeople * bus;
    let permicrobuspeople = 11;
    let microbus = 1;
    let totalPeopleInMicrobus = microbus * permicrobuspeople;
    let totalPeople = totalPeopleInBus + totalPeopleInMicrobus;
    let PeopleLocalbus = PeopleGo - totalPeople;
    console.log("people go in the local bus:", PeopleLocalbus);

    const perPeopleINPublicBus = 250;
    const publicBusTaka = perPeopleINPublicBus * PeopleLocalbus;
    return publicBusTaka;
    

}
var answer = publicBusFare(117);
console.log("total public bus fee of 6 people:", answer);

// no-2
function publicBusFare2(peopleGo2){
    const PerBusPeople = 50;
    const Bus = 4;
    const BusPeople = PerBusPeople * Bus;
    const PerMicroPeople = 11;
    const Microbus = 3;
    const MicrobusPeople = PerMicroPeople * Microbus;
    const LocalBusPeople = peopleGo2 - (BusPeople + MicrobusPeople);
    console.log("the people will go to local bus among 235:", LocalBusPeople);
    let LocalBusfee = 250;
    let LocalBusfeeFor2People = LocalBusfee * LocalBusPeople;
    return LocalBusfeeFor2People; 

}
var answer = publicBusFare2(235);
console.log("Local bus fee for 2 people:", answer);




