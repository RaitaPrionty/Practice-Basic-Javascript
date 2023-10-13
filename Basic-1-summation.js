// summation of 1-n 
function summation(n){
    var sum = 0;
    for(var i = 1; i <= n; i++){
        // console.log(i);
        sum = sum + i;
    }
    // console.log(sum);
    return sum;

}

var answer = summation(100);
console.log("summation of 1-100:", answer);