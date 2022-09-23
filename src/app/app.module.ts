import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { CreateNotesComponent } from './pages/create-notes/create-notes.component';
import { ListCardsComponent } from './pages/list-cards/list-cards.component';
import { ListNotesComponent } from './pages/list-notes/list-notes.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    CreateNotesComponent,
    ListCardsComponent,
    ListNotesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
