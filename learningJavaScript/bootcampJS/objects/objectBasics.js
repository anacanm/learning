let myBook =
{
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook);
console.log(myBook.title);
console.log(`${myBook.title} is by ${myBook.author}`)
myBook.title = 'Animal Farm';
console.log(`${myBook.title} is by ${myBook.author}`)

let person =
{
    name:'Andrew',
    age: 17,
    city: 'Los Angeles'
}

console.log(`${person.name} is ${person.age} years old, and lives in ${person.city}.`)