import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/model/deck.model';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html',
  styleUrls: ['./search-cards.component.css']
})
export class SearchCardsComponent implements OnInit {

  decks: Deck[] = []
  
  constructor(private deckService: DeckService) { 
    this.decks = this.deckService.getAllDecks()
  }

  ngOnInit(): void {
  }

}
