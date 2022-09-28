import { Injectable } from '@angular/core';
import { Deck } from '../model/deck.model';
import { HttpClient } from '@angular/common/http';
import { Card } from '../model/card.model';
import { CardService } from './card.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  BASE_URL = 'http://localhost:7001'

  // card: Card = new Card
  // deck: Deck = new Deck
  // deckSet: Deck[] = []

  constructor(private http: HttpClient) {
    // for (let i = 1; i < 10; i++) {
    //   let deck: Deck = new Deck
    //   for (let i = 1; i < 5; i++) {
    //     let card: Card = new Card
    //     card.cardId = i
    //     card.title = "Title of Card #" + i
    //     card.description = "Subject #" + i
    //     deck.cardSet.push(card)
    //   }
    //   deck.deckId = i
    //   deck.title = "Midter Review #" + i
    //   deck.description = "Astro Physics: Ch " + i
    //   this.deckSet.push(deck)
    // }
  }

  getAllDecks(): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.BASE_URL}/deck/all`);
  }

  getDeckById(id: number) {
    return this.http.get<Deck>(`${this.BASE_URL}/deck/` + id);
  }

  getDecksByQuery(query: String): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.BASE_URL}/deck/search/` + query);
  }


}
