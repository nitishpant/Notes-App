
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
    return fetchnotes();

};
var getnote =(title) => {
    var notes=fetchnotes();
    var filterednots=notes.filter((note)=>note.title===title);
    return filterednots[0];
};
var remove =(title) =>{
    var notes= fetchnotes();
    var newnotes=[]; 
    var duplicatenotes;
    if( duplicatenotes=notes.filter((note)=>note.title!=title)){
        newnotes=duplicatenotes;
    }
    savenotes(newnotes);
    return notes.length!=newnotes.length;
};
var lognote=(note)=>{
    debugger;
    console.log('----');
    console.log('TITLE :'+note.title);
    console.log('BODY :'+note.body);
};
module.exports={
    addnote,getall,getnote,remove,lognote              //es6 syntax
};