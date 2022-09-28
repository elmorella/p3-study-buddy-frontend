import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { Deck } from 'src/app/model/deck.model';
import { DeckService } from 'src/app/services/deck.service';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  deckList: Deck[]=[];
  selectedDeck: Deck = new Deck();

  constructor(private deckservice: DeckService) { }

  ngOnInit(): void {
    // this.deckList = this.deckservice.getAllDecks();
  }

  openDeck(number:any){
    // //save  current selected deck before changing 
    // this.selectedDeck = this.deckservice.getDeckById(number)
    // console.log(this.selectedDeck)
  }

  addCardtoSet(forms:any){
    if (!forms.value.word || !forms.value.definition){

    }
    else {
    let card = new Card();
    card.title = forms.value.word;
    card.description = forms.value.definition;
    this.selectedDeck.cardSet.push(card);
    }
  }

  addDecktoList(forms:any){
    if (!forms.value.title || !forms.value.description){

    }
    else{
      let tempDeck = new Deck();
      tempDeck.title = forms.value.title;
      tempDeck.description = forms.value.description;
      this.deckList.push(tempDeck);
    }
    
  }
}
