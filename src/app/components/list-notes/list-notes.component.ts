import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notes: Note[] = []

  constructor(private cardService: NoteService) {
    this.notes = this.cardService.getAllNotes()
   }

  ngOnInit(): void {
  }
}
