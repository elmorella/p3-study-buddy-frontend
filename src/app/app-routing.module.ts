import { NgModule } from '@angular/core';
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
import { NoteViewComponent } from './components/note-view/note-view.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path:'card', component: CardComponent},
  {path: 'createCard', component: CreateCardComponent},
  { path: 'note-view', component: NoteViewComponent },
  { path: 'carousel', component: CarouselComponent},
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
  CreateNotesComponent
]