import { Injectable } from '@angular/core';
import { Deck } from '../model/deck.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  BASE_URL = 'http://localhost:7001'

  constructor(private http: HttpClient) {}

  getAllDecks(): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.BASE_URL}/deck/all`);
  }

  getDecksByQuery(query: String): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.BASE_URL}/deck/search/` + query);
  }

  getDeckById(id: number) {
    return this.http.get<Deck>(`${this.BASE_URL}/deck/` + id);
  }

  saveDeck(deck: Deck) {
    let newDeck: Deck = new Deck()
    newDeck.title = deck.title
    newDeck.description = deck.description
    return this.http.post(`${this.BASE_URL}/deck/add`, newDeck);
  }
}
