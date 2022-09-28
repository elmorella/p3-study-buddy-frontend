import { Injectable } from '@angular/core';
import { Deck } from '../model/deck.model';
import { Card } from '../model/card.model';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  // card: Card = new Card
  deck: Deck = new Deck
  deckSet: Deck[] = []

  constructor() {
    for (let i = 1; i < 10; i++) {
      let deck: Deck = new Deck
      for (let i = 1; i < 5; i++) {
        let card: Card = new Card
        card.cardId = i
        card.title = "Title of Card #" + i
        card.description = "Subject #" + i
        deck.cardSet.push(card)
      }
      deck.deckId = i
      deck.title = "Midter Review #" + i
      deck.description = "Astro Physics: Ch " + i
      this.deckSet.push(deck)
    }
  }

  getAllDecks() {
    this.deckSet = []
    for (let i = 1; i < 10; i++) {
      let deck: Deck = new Deck
      for (let i = 1; i <= 10; i++) {
        let card: Card = new Card
        card.cardId = i
        card.title = "Title of Card #" + i
        card.description = "Subject #" + i
        deck.cardSet.push(card)
      }
      deck.deckId = i
      deck.title = "Midter Review #" + i
      deck.description = "Astro Physics: Ch " + i
      this.deckSet.push(deck)
    }
    return this.deckSet
  }

  getDeckById(id: number): Deck {
    // this.deck.deckId = id
    // this.deck.description = "Deck description #" + id
    // this.deck.title = "Deck title #" + id

    // this.deckSet = []
    // for (let i = 1; i < 10; i++) {
    //   let deck: Deck = new Deck
    //   let card: Card = new Card
    //   card.cardId = i
    //   card.title = "Title of Card #" + i
    //   card.description = "Subject #" + i
    //   deck.deckId = i
    //   deck.title = "Midter Review #" + i
    //   deck.description = "Astro Physics: Ch " + i
    //   deck.cardSet.push(card)
    //   this.deckSet.push(deck)
    // }

    let deck: Deck = new Deck()
    deck.deckId = 2;
    deck.title = "pizza";
    deck.description = "pepperoni"
    let card: Card = new Card();
    card.title = "chucky";
    card.description = "cheezus";
    deck.cardSet.push(card);
    console.log(deck)
    return deck
  }
}
