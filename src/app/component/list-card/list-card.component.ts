import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  cardSet: Card[] = []

  constructor(private cardService: CardService) { 
    this.cardSet = this.cardService.getCardSet()
    console.log(this.cardSet)
  }

  ngOnInit(): void {
  }
}
