import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card = new Card;
  // card: Card = new Card
  @Input() cardId: number = 0
  toggleProperty = false;

  constructor(private activatedRoute: ActivatedRoute, private cardService: CardService) {
  }

  ngOnInit(): void {
    console.log('CARD COMPONENET: cardId: ' + this.card.cardId)
  }

  toggle(){
    this.toggleProperty = !this.toggleProperty;
  }

}
