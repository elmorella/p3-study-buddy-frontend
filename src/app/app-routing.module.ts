import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardComponent } from 'src/app/component/list-card/list-card.component';
import { ListNotesComponent } from 'src/app/component/list-notes/list-notes.component';

const routes: Routes = [
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
  ListNotesComponent
]
