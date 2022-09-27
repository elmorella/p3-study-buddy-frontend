import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/model/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css'],
})
export class NoteViewComponent implements OnInit {

  noteId: number = 0
  note: Note = new Note()

  noteSubject = 'Scripts';
  noteTitle = 'Bee Movie';
  noteText = 'This is scrollable if it gets too long';

  constructor(private route: ActivatedRoute, private noteService: NoteService) {
    this.noteId = parseInt(route.snapshot.paramMap.get('noteId')!)

    console.log("note ID " + this.noteId)

    this.noteService.getNoteByID(this.noteId).subscribe((note: Note) =>{
      this.note = note
    })

    console.log("note title" + this.note.title)
    
   }

  ngOnInit(): void {
  }

}
