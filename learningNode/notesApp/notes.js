const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    let notes = loadNotes();

    //if there is a duplicate note, duplicate note will be set to the object. if not, it will remain undefined
    let duplicateNote = notes.find(note => note.title===title)
    if (!duplicateNote) { //if duplicateNote is undefined, meaning that there was no duplicate found, push the note
        notes.push({
            title: title,
            body: body
        })
    }

    fs.writeFileSync('notes.json', JSON.stringify(notes))
}


const removeNote = (title) => {
    let notes = loadNotes()
    let newNotes = notes.filter(note => note.title !== title)
    if (newNotes.length < notes.length) {
        console.log(chalk.green(title, "removed!"))
    }
    else {
        console.log(chalk.red("No matching notes found"))
    }

    fs.writeFileSync('notes.json', JSON.stringify(newNotes))
}


const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json'))
    }
    catch{
        return []
    }
}

const listNotes = () => {
    notes = loadNotes();
    notes.forEach(note => console.log(chalk.blue(note.title + ": "), chalk.yellow(note.body)))
}

const readNote = (title) => {
    let notes = loadNotes();
    try {
        note = (notes.find(note => note.title === title))
        console.log(chalk.green.inverse(note.title, note.body))
    }
    catch(err) {
        console.log(chalk.red("No note found with that title!"))
    }
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}