import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { Deck } from 'src/app/model/deck.model';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  deckList: Deck[]=[];
  selectedDeck: Deck = new Deck();

  constructor() { }

  ngOnInit(): void {
  }

  openDeck(number:any){
    
  }

  addCardtoSet(forms:any){
    let card = new Card();
    card.title = forms.value.word;
    card.description = forms.value.description;
    this.selectedDeck.cardSet.push(card);
  }

  addDecktoList(forms:any){
    if (!forms.value.title || !forms.value.description){

    }
    else{
      let tempDeck = new Deck();
      tempDeck.deckId = this.deckList.length -1;
      tempDeck.title = forms.value.title;
      tempDeck.description = forms.value.description;
      this.deckList.push(tempDeck);
    }
    
  }
}
