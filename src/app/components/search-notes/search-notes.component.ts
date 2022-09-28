import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/model/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-search-notes',
  templateUrl: './search-notes.component.html',
  styleUrls: ['./search-notes.component.css']
})
export class SearchNotesComponent implements OnInit {

  notes: Note[] = [];
  searchTerm:string = '';

  constructor(private noteService: NoteService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.searchTerm = this.route.snapshot.paramMap.get("searchTerm")!
  
    this.noteService.getNoteByQuery(this.searchTerm).subscribe((notes: Note[])=>{this.notes = notes});

  }

}
