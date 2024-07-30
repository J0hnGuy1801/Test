
let notesTitles = ['A', 'B', 'C']
let notes = ['shake','shook', 'shaken'];


let trashNotesTitles = []; 
let trashNotes = [];



function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


function getNoteTemplate(indexNote){
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]} <button onclick="noteToTrash(${indexNote})">x</button></p> `;
}


function getTrashNoteTemplate(indexTrashNote){
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]} <button onclick="removeTrashNote(${indexTrashNote})">x</button></p> `;
}

function addNote() { 
let noteInputRef = document.getElementById('note_input');
let noteInput = noteInputRef.value;

notes.push(noteInput);

renderNotes();

noteInputRef.value = "";
}

// notizen speichern


function noteToTrash(indexNote) {
let trashNote = notes.splice(indexNote, 1);
trashNotes.push(trashNote[0]);
let trashNoteTitle = notesTitles.splice(indexNote, 1);
trashNotesTitles.push(trashNoteTitle[0]);

renderNotes();
renderTrashNotes();
}

function removeTrashNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);

    renderTrashNotes();
}

// notizen archivieren
