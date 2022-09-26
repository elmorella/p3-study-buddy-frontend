import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardSet: Card[] = []

  constructor() {
    for (let i = 0; i < 9; i++) {
      let card = new Card()
      card.cardId = i
      card.title = "Title of Card #" + i
      card.description = "Subject #" + i
      this.cardSet.push(card)
    }
  }

  getCardSet() {
    return this.cardSet
  }
}