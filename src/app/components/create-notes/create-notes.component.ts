import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent implements OnInit {

  noteBody : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  setNoteBody(text : string){
    this.noteBody = text;
  }
}
