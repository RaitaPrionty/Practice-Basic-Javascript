// Problem 3:  oilPrice

// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।



// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।



// Sample Data

// Input:1, 1, 1

// 30, 20, 10

// 1,0,2

// 0,2,3

// Output:// 379

// 7370

// 384

// 665

function oilPrice(degel, petroll, octen){
    var OneleaterDg = 114;
    var OneleaterPetroll = 130;
    var OneleaterOctn = 135; 
    var degelprice = degel * OneleaterDg;
    var petrollprice = petroll * OneleaterPetroll;
    var octenprice = octen * OneleaterOctn;
    var totalPrice = degelprice + petrollprice + octenprice;
    return totalPrice;

}
var total1 = oilPrice(1,1,1);
var total2 = oilPrice(30,20,10);
var total3 = oilPrice(1,0,2);
var total4 = oilPrice(0,2,3);
console.log("total-Price1:", total1);
console.log("total-Price2:", total2);
console.log("total-Price3:", total3);
console.log("total-Price4:", total4);



