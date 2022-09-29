import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css']
})
export class RichTextEditorComponent implements OnInit {
  ckeditorContent: string = ''
  note: Note = new Note()
  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void { }

  saveNote() {
    let note: Note = new Note()
    note.title = this.note.title
    note.body = this.ckeditorContent
    this.noteService.saveNote(note).subscribe(
      (note: Note) => {
        console.log("note title " + note.title)
        console.log("note body " + note.body)
      })
      this.router.navigate(['/notes'])
  }
}
