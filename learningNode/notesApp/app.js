const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')
//const getNotes = require('./notes')




yargs.command({
    command:'add',
    describe:'adds a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }

})

yargs.command({
    command:'remove',
    describe:'remove a specified note',
    builder :{
        title: {
            describe: "Note title to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'prints a specific note',
    builder: {
        title: {
            describe: 'Title of the note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'lists the notes',
    handler: () => {
        notes.listNotes()
    }
})


yargs.parse()
