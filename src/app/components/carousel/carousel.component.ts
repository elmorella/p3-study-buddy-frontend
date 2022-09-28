import { HttpClient } from '@angular/common/http';
import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/model/card.model';
import { Deck } from 'src/app/model/deck.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  deckId: number = 0
  deck: Deck = new Deck
  cards: Card[] = []
  // card: Card = new Card

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private cardService: CardService) {
    this.deckId = parseInt(this.activatedRoute.snapshot.paramMap.get('deckId')!)
    console.log("deck id passed from deck list " + this.deckId)
  }

  selectedCard = 0;

  ngOnInit(): void {
    this.cardService.getCardsByDeckId(this.deckId).subscribe(
      (cards: Card[]) => {
      this.cards = cards

      // Reindex cards 
      for(let i = 0; i < this.cards.length; i++){
        cards[i].cardId = i
        console.log(cards[i].cardId)
      }
    })
  }

  selectCard(index: number) {
    this.selectedCard = index;
  }

  onPrevClick() {
    if(this.selectedCard === 0) {
      this.selectedCard = this.cards.length-1;
    } else {
      this.selectedCard--;
    }
  }

  onNextClick() {
    if(this.selectedCard === this.cards.length-1) {
      this.selectedCard = 0;
    } else {
      this.selectedCard++;
    }
  }

  trackCard(index: number, card: Card) {
    return card ? card.cardId : undefined;
  }
}
