import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  BASE_URL = 'http://localhost:7001'

  notes: Note[] = []
  queryNotes: Note[] = []
  constructor(private http: HttpClient) {

    // for (let i = 0; i < 9; i++) {
    //   let note = new Note()
    //   note.noteId = i
    //   note.title = "Title of Note #" + i
    //   note.body = "Note #" + i
    //   this.notes.push(note)
    // }
  }

  getAllNotes() : Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/note/all`);
  }

  getNoteByQuery(query: String){
    return this.http.get<Note[]>(`${this.BASE_URL}/note/search/` + query); 
  }

  getNoteByID(id: number){
    return this.http.get<any>(`${this.BASE_URL}/note/` + id)
  }


}