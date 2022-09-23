import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './pages/create-card/create-card.component';


const routes: Routes = [
  {path: "createCard", component: CreateCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CreateCardComponent
]
