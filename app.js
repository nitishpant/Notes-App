const fs = require('fs');
const _ =require('lodash');
const yargs=require('yargs');

const notes =require('./notes.js');
const titleoptions={
    describe:'Title of the note',
    demand:true
};
const argv =yargs
    .command('Add','Add a new note',{
    title:titleoptions,
    body:{
        describe: 'Body of the note',
    }
})
    .command('List','List all the Notes')
    .command('read','Read a note',{
        title:titleoptions, 
    })
    .command('Remove','Remove a note',{
        title:titleoptions
    })
 .help()
.argv;
var command =argv._[0];

if (command==='add'){
   var note= notes.addnote(argv.title,argv.body);  
   if(note) {
    console.log('note created');
   notes.lognote(note);
   }else {
    console.log('note title already taken');

   }
}
 else if ( command ==='list'){
    var allnotes=notes.getall();
    console.log('printing '+ allnotes.length+' note(s)');
    allnotes.forEach((note) =>notes.lognote(note));
    
}

 else if( command==='read') {
    var notefound=notes.getnote(argv.title);            //notes variable is requiring notes.js
    if(notefound) {
    console.log('note found');
    notes.lognote(notefound);
    }else {
        console.log('note not found');
    
       }

}
 else if (command ==='remove'){
    var noteremoved=notes.remove(argv.title);
    var message = noteremoved ? 'note was removed successfully' : 'Note not found';
    console.log(message);

    

} else {
    console.log('enter a valid command')
}
