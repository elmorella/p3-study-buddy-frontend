import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { param } from 'jquery';
import { Deck } from 'src/app/model/deck.model';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  decks:Deck[] = [];
  searchTerm = '';

  constructor(private deckService:DeckService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    // this.deckService.getDecksByQuery("Midterm").subscribe((decks: Deck[])=>{this.decks = decks})

          
  }

  // onSearchTextSubmited(searchValue: string){
  //   this.searchText = searchValue;
  //   console.log(this.searchText);
  // }

}
