let myBook =
{
    title:  '1984',
    author: 'George Orwell',
    pageCount: '325'
}

let otherBook = 
{
    title: 'Coders',
    author: 'Clive',
    pageCount: 400
}

let bookSummary = function(book)
{
    console.log(book.title + " is written by " + book.author + " and has " + book.pageCount + " pages");
};

let returnObject = function(book)
{
    return{
        summary: `${book.title} is written by ${book.author}`,
        pageCountSummary: `${book.title} has ${book.pageCount} pages`
    }
}
bookSummary(myBook);
bookSummary(otherBook);
let burner = returnObject(myBook)
console.log(burner.summary)
console.log(burner.pageCountSummary)

let func = function(tempInFahrenheit)
{
    return {
        tempInCelsius: (tempInFahrenheit-32)*(5/9),
        tempInKelvin: ((tempInFahrenheit-32)*(5/9))+273
    }
}

temp = func(74);
console.log(temp.tempInCelsius);
console.log(temp.tempInKelvin)