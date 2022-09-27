import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/model/deck.model';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  decks: Deck[] = []

  constructor(private deckService: DeckService) { 
    this.decks = this.deckService.getAllDecks()
    // console.log(this.decks)
  }

  ngOnInit(): void {
  }
}
