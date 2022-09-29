import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  BASE_URL = 'http://localhost:7001'

  card: Card = new Card

  constructor(private http: HttpClient) {}

  getCardsByDeckId(deckId: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.BASE_URL}/card/` + deckId);
  }

  getCardById(cardId: number) {
    this.card.cardId = cardId
    this.card.title = "This card id is: " + cardId
    return this.card
  }

  getCardsByQuery(query: String): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.BASE_URL}/card/search/` + query);
  }

  saveCard(card: Card){
    return this.http.post<Card>(`${this.BASE_URL}/card/add`, card)
  }

  getCardSet() {
    return this.card
  }

}