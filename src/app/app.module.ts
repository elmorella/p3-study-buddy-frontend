import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from './services/note.service';
import { CardService } from './services/card.service';
import { DeckService } from './services/deck.service';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

=======
import { MatButtonModule } from '@angular/material/button';
import { CKEditorModule } from 'ng2-ckeditor'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
>>>>>>> feature-merge

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
=======
    MatButtonModule,
    CKEditorModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    BrowserAnimationsModule
>>>>>>> feature-merge

  ],
  providers: [CardService,DeckService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
