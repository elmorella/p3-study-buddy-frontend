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
import { CKEditorModule } from 'ng2-ckeditor';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import { NoteCardRelationComponent } from './components/note-card-relation/note-card-relation.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    HeaderComponent,
    ButtonSetComponent,
    FooterComponent,
    routingComponents,,
    CreateNotesComponent,
    RichTextEditorComponent,
    NoteCardRelationComponentCreateCardComponent,
    CreateNotesComponent,
    ListCardsComponent,
    ListNotesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
