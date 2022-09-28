import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/model/deck.model';
import { DeckService } from 'src/app/services/deck.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html',
  styleUrls: ['./search-cards.component.css']
})
export class SearchCardsComponent implements OnInit {

  decks: Deck[] = [];
  searchTerm:string =  '';
  
  constructor(private deckService: DeckService, private route:ActivatedRoute) { 
    // this.decks = this.deckService.getAllDecks()
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params =>{
    //   if(params.name)
    //     this.decks = this.deckService.getAllDecks().filter(deck => 
    //       this.decks.title.toLowerCase().incudes(params.['name'].toLowerCase()));
    //   else  
    //     this.decks = this.deckService.getAllDecks();
    // })
    this.searchTerm = this.route.snapshot.paramMap.get("searchTerm")!
  
    this.deckService.getDecksByQuery(this.searchTerm).subscribe((decks: Deck[])=>{this.decks = decks});
  }

  

}
