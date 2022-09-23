import { Injectable } from '@angular/core';
import { Deck } from '../model/deck.model';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  deckSet: Deck[] = []

  constructor() {
    for (let i = 0; i < 9; i++) {
      let deck = new Deck()
      deck.deckId = i
      deck.title = "Title of Deck #" + i
      deck.description= "Description #" + i
      this.deckSet.push(deck)
    }
   }

   getAllDecks(){
    return this.deckSet
   }
}
