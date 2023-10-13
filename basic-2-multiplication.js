//  3 er namota using javascript
function multaiplication (number){
    for(var i = 1; i <= 10; i++){
        // console.log(number * i);
        var multiple = number * i;
     console.log(number, "*", i, "=", multiple);
        
    
    }
    
        
   
}
multaiplication(5);

// no-2
function multaiplication(numbers){
    const newArray = [];
    for(var i = 1; i <= 10; i++){
        var multiple1 = numbers * i;
        
        var newarrayelement = numbers + " * " + i + " = " + multiple1;  
        newArray.push([newarrayelement]);
    }
    return newArray;

}
var answer = multaiplication(5);
console.log(answer);
