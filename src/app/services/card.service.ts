import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  card: Card = new Card

  constructor() {
    this.card.cardId = 25
    this.card.title = "what is the answer to life the universe and everything?"
    this.card.description = "42"
  }

  getCardById(cardId: number) {
    this.card.cardId = cardId
    this.card.title = "This card id is: " + cardId
    return this.card
  }

  getCardSet() {
    return this.card
  }
}