import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css'],
})
export class NoteViewComponent implements OnInit {
  noteSubject = 'Scripts';
  noteTitle = 'Bee Movie';
  noteText = 'This is scrollable if it gets too long';

  constructor() { }

  ngOnInit(): void {
  }

}
