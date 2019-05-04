console.log('Starting app.js');
const fs = require('fs');
const _ =require('lodash');
const yargs=require('yargs');

const notes =require('./notes.js');

const argv =yargs.argv;
var command =argv._[0];
console.log('Command: ',command);
console.log('yargs',argv);

if (command==='add'){
   var note= notes.addnote(argv.title,argv.body);  
   if(note) {
    console.log('note created');
    console.log('----');
    console.log('TITLE :'+note.title);
    console.log('BODY :'+note.body);
   }else {
    console.log('note title already taken');

   }
} else if ( command ==='list'){
    notes.getall();
} else if( command==='read') {
    notes.getnote(argv.title);
} else if (command ==='remove'){
    notes.remove(argv.title);
} else {
    console.log('enter a valid command')
}
