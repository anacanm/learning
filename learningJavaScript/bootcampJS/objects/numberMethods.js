/*let num = 103.945;

let fixedNum = num.toFixed(2);  //truncates the amount of decimal places of the number. However, it has issues rounding so don't use it.
console.log(fixedNum)

let roundedNum = Math.round(num);
console.log(roundedNum);
*/
let randomNumInclusive = function(min,max)//inclusive of both ends
{
    return Math.floor(Math.random()*(max-min+1))+min;
}
let randomInteger = function(min, max)
{
    //returns a pseudorandom integer between the minimum(inclusive) and maximum(exlcusive)
    return Math.floor(Math.random()*Math.floor(max))
}


//console.log(randomNumInclusive(0,5));

for(let i = 0;i<10;i++){
console.log(randomInteger(0,10));
}

