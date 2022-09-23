import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = []

  constructor() {

    for (let i = 0; i < 9; i++) {
      let note = new Note()
      note.noteId = i
      note.title = "Title of Note #" + i
      note.body = "Note #" + i
      this.notes.push(note)
    }
  }

  getAllNotes() {
    return this.notes
  }
}