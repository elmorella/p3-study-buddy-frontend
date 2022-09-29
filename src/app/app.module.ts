import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from './services/note.service';
import { CardService } from './services/card.service';
import { DeckService } from './services/deck.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CKEditorModule } from 'ng2-ckeditor'
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { SearchNotesComponent } from './components/search-notes/search-notes.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import {MatDialogModule, MatDialogConfig, MatDialog} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchNotesComponent,
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
  bootstrap: [AppComponent],
  entryComponents: [CreateNotesComponent]
})
export class AppModule { }