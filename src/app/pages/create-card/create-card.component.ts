import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { Deck } from 'src/app/model/deck.model';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  deckList: Deck[]=[
   

  ];
  constructor() { }

  ngOnInit(): void {
  }

  addDecktoList(forms:any){
    let tempDeck = new Deck();
    tempDeck.title = forms.value.title;
    tempDeck.description = forms.value.description;
    this.deckList.push(tempDeck);
  }
}
