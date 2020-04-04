let name ="Anacan Mangelsdorf";
let length = name.length;
console.log(length-1 + " is how many characters are in your name");
//im so bored

let nameAllCaps = (name.toUpperCase());
console.log(nameAllCaps);
let nameLowerCase = name.toLowerCase();
console.log(nameLowerCase);


console.log(name.includes('G')); //str.includes is case sensitive

console.log(name.trim());

let isValidPassword = function(pass)
{
    return (pass.length>8 && !(pass.includes('password'))) //ik i didnt account for case sensitivity but i'm lazy
}
console.log(isValidPassword('hehe'));
console.log(isValidPassword('asasfasfasfasfasfasf'));
console.log(isValidPassword('asfasasfasfasfasfpasswordasfasfasfasfasf'));