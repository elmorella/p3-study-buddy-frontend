import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/model/card.model';
import { Deck } from 'src/app/model/deck.model';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  deck: Deck = new Deck
  cards: Card[] = []
  card: Card = new Card

  constructor(private activatedRoute: ActivatedRoute, private deckService: DeckService) {
    let deckId: number = parseInt(this.activatedRoute.snapshot.paramMap.get('deckId')!)

    // TODO: insert database data
    
    this.deck = deckService.getDeckById(deckId - 1)
    this.cards = this.deck.cardSet
    this.card = this.cards[2]
  }

  selectedCard = 1;

  ngOnInit(): void {
  }

  selectCard(index: number) {
    this.selectedCard = index;
  }

  onPrevClick() {
    if(this.selectedCard === 1) {
      this.selectedCard = this.cards.length;
    } else {
      this.selectedCard--;
    }
  }

  onNextClick() {
    if(this.selectedCard === this.cards.length) {
      this.selectedCard = 1;
    } else {
      this.selectedCard++;
    }
  }

  trackCard(index: number, card: Card) {
    return card ? card.cardId : undefined;
  }
}
