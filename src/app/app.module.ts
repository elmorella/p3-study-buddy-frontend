import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from './services/note.service';
import { CardService } from './services/card.service';
import { DeckService } from './services/deck.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CKEditorModule } from 'ng2-ckeditor'
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import { NoteCardRelationComponent } from './components/note-card-relation/note-card-relation.component';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatIconModule } from '@angular/material/icon';
=======
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CKEditorModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CardService, DeckService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
