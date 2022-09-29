import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { Deck } from 'src/app/model/deck.model';
import { DeckService } from 'src/app/services/deck.service';
import { CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';
import { resetFakeAsyncZone } from '@angular/core/testing';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  deckList: Deck[] = [];
  selectedDeck: Deck = new Deck();
  selectedDeckId: number = 0;
  deckCardSet: Card[] = [];

  constructor(private deckservice: DeckService, private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.deckservice.getAllDecks()
      .subscribe((decks) => {
        this.deckList = decks;
      })
  }

  openDeck(deckId: number) {
    this.selectedDeckId = deckId
    this.deckservice.getDeckById(deckId).subscribe(
      (deck) => {
        this.selectedDeck = deck
        console.log(this.selectedDeck.deckId)
      })
  }

  addCardtoDeck(forms: any) {
    if (!forms.value.word || !forms.value.definition) {
    } else {
      let newCard = new Card();
      newCard.title = forms.value.word;
      newCard.description = forms.value.definition;
      newCard.deck = this.selectedDeck

      // Save card to db
      this.cardService.saveCard(newCard).subscribe((card: Card) => { newCard = card })
      forms.resetForm()
    }
  }

  addDecktoDatabase(forms: any) {
    if (!forms.value.title || !forms.value.description) {
    } else {
      let newDeck = new Deck();
      newDeck.title = forms.value.title;
      newDeck.description = forms.value.description;
      this.deckList.push(newDeck);
      this.deckservice.saveDeck(newDeck).subscribe(
        (deck: Deck) => {
          newDeck = deck;
          console.log(newDeck)
        })
      window.location.reload()
    }
  }

  // toast() {
  //   var x = document.getElementById("snackbar");
  //   x.className = "show";
  //   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  // }
}
