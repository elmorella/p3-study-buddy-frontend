import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './pages/create-card/create-card.component';
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
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { NoteCardRelationComponent } from './components/note-card-relation/note-card-relation.component';
import { RichTextEditorComponent } from 'src/app/components/rich-text-editor/rich-text-editor.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'decks', component: ListCardComponent},
  { path: 'notes', component: ListNotesComponent},
  { path:'card/:cardId', component: CardComponent},
  { path: 'createcard', component: CreateCardComponent},
  { path: 'search', component: SearchCardsComponent},
  { path: 'search/:name', component: TestComponent},
  { path: 'note-view/:noteId', component: NoteViewComponent },
  { path: 'carousel/:deckId', component: CarouselComponent},
  { path: 'create-notes', component: CreateNotesComponent},
  { path: '**', component: HomePageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CreateCardComponent,
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
  SearchCardsComponent,
  CreateNotesComponent,
  NoteCardRelationComponent,
  RichTextEditorComponent
]