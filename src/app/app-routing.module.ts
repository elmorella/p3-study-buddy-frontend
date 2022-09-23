import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path:'card', component: CardComponent},
  {path: "createCard", component: CreateCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CreateCardComponent,
  CardComponent
]