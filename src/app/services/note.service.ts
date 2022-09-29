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
  constructor(private http: HttpClient) {}

  getAllNotes() : Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/note/all`);
  }

  getNotesByQuery(query: String){
    return this.http.get<Note[]>(`${this.BASE_URL}/note/search/` + query); 
  }

  getNoteByID(id: number){
    return this.http.get<any>(`${this.BASE_URL}/note/` + id)
  }

  saveNote(note: Note) {
    return this.http.post(`${this.BASE_URL}/note/add`, note)
  }
}