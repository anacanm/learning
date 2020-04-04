

let output = function()
{
    console.log("I am bored in this tutorial")
}

output()

let square = function(num)
{
    return num**2
}

console.log(square(3));
console.log(square(10));

let convertFahrenheitToCelsius = function(num)
{
    return(num-32)*(5/9);
}

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));

let defaultFunc = function(name="John Doe", score = 0)
{
    console.log(name + " " +  score);
}
defaultFunc(undefined, 99)

let tipCalculator = function(total, tip=.15)
{
    return total+(total*tip);
}

console.log(tipCalculator(10,undefined));