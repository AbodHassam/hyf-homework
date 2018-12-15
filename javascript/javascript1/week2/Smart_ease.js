var notes = [];
function addNote(noteId, note, noteId2, note2) {
    notes.push({
        id: noteId,
        info: note
    }, {
            id: noteId2,
            info: note2
        })
}

function getNoteFromId(id) {
    for (let i = 0; i < id; i++) {
        if (id <= notes[i].id) {
            return notes[i];
        }
        else if (id >= 3 || id <= 0) { return "The id doesn't exists." }
        /* else if (id != notes[i].id) {
            return "The id doesn't exists."
        } */
    }
    if (id === undefined || isNaN(id)) {
        console.log('Error: The Id is undefined or not a number');
    }
}

function showAllNotes() {
    for (let i = 0; i < notes.length; i++) {
        console.log("The note with id: " + notes[i].id + ", has the following note text: " + notes[i].info + ".");
    }
}
addNote(1, 'First note', 2, 'Second note');
console.log(notes);
console.log(getNoteFromId('Secret'));
showAllNotes();