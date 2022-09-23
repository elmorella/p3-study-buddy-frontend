import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListCardComponent } from 'src/app/components/list-card/list-card.component';
import { ListNotesComponent } from 'src/app/components/list-notes/list-notes.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,    
  },
  {path:'card', 
  component: CardComponent}

  { path: '', component: ListCardComponent},
  { path: 'cardlist', component: ListCardComponent},
  { path: 'noteslist', component: ListNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ListCardComponent,
  ListNotesComponent,
  CardComponent
]