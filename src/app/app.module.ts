import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ButtonSetComponent } from './components/home/button-set/button-set.component';
import { FooterComponent } from './components/footer/footer.component';

import { routingComponents } from './app-routing.module';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { CreateNotesComponent } from './pages/create-notes/create-notes.component';
import { ListCardsComponent } from './pages/list-cards/list-cards.component';
import { ListNotesComponent } from './pages/list-notes/list-notes.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    HeaderComponent,
    ButtonSetComponent,
    FooterComponent,
    routingComponents,
    CreateCardComponent,
    CreateNotesComponent,
    ListCardsComponent,
    ListNotesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
