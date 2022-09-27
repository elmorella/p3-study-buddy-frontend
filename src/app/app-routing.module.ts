import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ButtonSetComponent } from './components/home/button-set/button-set.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListCardComponent } from './components/list-deck/list-card.component';
import { ListNotesComponent } from 'src/app/components/list-notes/list-notes.component';
import { SearchCardsComponent } from './components/search-cards/search-cards.component';
import { TestComponent } from './pages/test/test.component';
import { NoteViewComponent } from './components/note-view/note-view.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'card/:cardId', component: CardComponent },
  { path: 'decks', component: ListCardComponent },
  { path: 'notes', component: ListNotesComponent },
  { path: 'search', component: TestComponent},
  { path: 'search/:name', component: TestComponent},
  { path: 'note-view', component: NoteViewComponent },
  { path: 'carousel/:deckId', component: CarouselComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomePageComponent,
  NavbarComponent,
  HeaderComponent,
  ButtonSetComponent,
  FooterComponent,
  CardComponent,
  ListCardComponent,
  ListNotesComponent,
  NoteViewComponent,
  CarouselComponent,
  SearchCardsComponent
]