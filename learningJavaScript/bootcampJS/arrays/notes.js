let notes = [{
    title: "Goal with doing this",
    body: "I want to learn Vanilla JavaScript so I can be a better web developer$",
    num: 0,
    completed: false
}, {
    title: "Academic goals",
    body: "Find time to read and enjoy studying more",
    num: 1,
    completed: true
}, {
    title: "Enjoy life in the moment",
    body: "Make conscious decisions regarding your life, all of your inputs shape you$",
    num: 2,
    completed: false
}]


let findNote = function(notes, noteTitle){
   
    noteIndex = notes.findIndex(function(value,index){
        return value.title === noteTitle;
    })
    if(noteIndex !== (-1))
    {
        return notes[noteIndex];
    }
    else {
        return undefined;
    }

}




const filterArrayOfObjects = function(array, query, property = null){
    //returns a new array of objects
    //new array of objects contains only the objects that have the query value in them
    //not case sensitive
    //if a property to search for is input, it is faster
    //if no property is specified, every property is checked
    if(property !== null)
    {
        return array.filter(elem => {
            try{
                if(elem[property].toLowerCase().includes(query.toLowerCase()))
                {
                    return true;
                }
                
            }
            catch(TypeError){
                if(elem[property]===query)
                {
                    return true;
                }
            }
            return false;
        })
    }

    return array.filter(elem => {
        for (property in elem){
            try{
                if (elem[property].toLowerCase().includes(query.toLowerCase()))
                {
                    return true;
                }
            }
            catch(TypeError){
                if(elem[property]===query)   
                {
                    return true;
                }             
            }
        }
        return false;
    })
}




const sortArrayOfObjects = function(notes)
{
    notes.sort(function(a,b){
        if(a.completed<b.completed)
        {
            return -1;
        }
        else if(a.completed>b.completed)
        {
            return 1;
        }
        else{
            return 0;
        }
            
    })
}


sortArrayOfObjects(notes);
console.log(notes);
//console.log(filterArrayOfObjects(notes, false, "completed"));



// note = findNote(notes, "Enjoy life in the moment");
// console.log(note);

// notes.forEach(function(value, index){ //the two parameters you have access to are value and index of each element
//     console.log(value, index);
// }
// )

// let notesIndex = notes.findIndex(function (value,index){
//     return value.title=== "Academic goals"
//     //findIndex works by iterating through each item in the list until the callback function returns true
//     //it returns the index of the first occurance of the callback returning true, -1 otherwise
// })

// console.log(notesIndex)
