/*console.log('starting notes.js');
const fs= require('fs')
var addnote = (title,body) => {
    var notes = [];
    var note={
        title,
        body
    };
    try{ var notessrting=fs.readFileSync('notes-data.json');
    notes=JSON.parse(notessrting);  // adding new notes

    } catch (e) {

    }

    var duplicatenotes=notes.filter((note)=>note.title===title) //ES6 way of using func

    if (duplicatenotes.length===0){
        notes.push(note); // adding first new note
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));

    }
};
var getall =() =>{
    console.log('Getting all notes');

};
var getnote =(title) => {
    console.log('Getting note',title);
};
var remove =(title) =>{
    console.log('Removing note',title)
};
module.exports={
    addnote,getall,getnote,remove
};
*/

// now moving things into functions
console.log('starting notes.js');
const fs= require('fs');
var fetchnotes =() => {
    try{ var notessrting=fs.readFileSync('notes-data.json');
    return notes=JSON.parse(notessrting);  // adding new notes

    } catch (e) {
    
    return [];
    }
};

var savenotes =(notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));

};
var addnote = (title,body) => {
    var notes = fetchnotes();
    var note={
        title,
        body
    };
    
    var duplicatenotes=notes.filter((note)=>note.title===title) //ES6 way of using func

    if (duplicatenotes.length===0){
        notes.push(note); // adding first new note
        savenotes(notes);
        return note;
    }
};
var getall =() =>{
    console.log('Getting all notes');

};
var getnote =(title) => {
    console.log('Getting note',title);
};
var remove =(title) =>{
    console.log('Removing note',title)
};
module.exports={
    addnote,getall,getnote,remove
};