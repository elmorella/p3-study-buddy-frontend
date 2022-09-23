import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ButtonSetComponent } from './components/home/button-set/button-set.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';
import { ListNotesComponent } from 'src/app/components/list-notes/list-notes.component';

const routes: Routes = [
  { path: '', component: ListCardComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'card', component: CardComponent },
  { path: 'cards', component: ListCardComponent },
  { path: 'notes', component: ListNotesComponent }
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
  ListNotesComponent
]