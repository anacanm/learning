let fahrenheit = 32;
let celsius = (fahrenheit-32)*(5/9);

console.log(celsius + " degrees celsius");

let kelvin = (fahrenheit+459.67)*(5/9);
console.log(kelvin + " degrees kelvin");

if(celsius<=0)
{
    console.log("it is freezing")
}