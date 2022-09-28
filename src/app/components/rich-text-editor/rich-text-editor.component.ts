import { Component, Output, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  template: `
  <ckeditor
    [(ngModel)]="ckeditorContent"
    [config]="{uiColor: '#99000'}"
    [readonly]="false"
    (change)="onChange($event)"
    (editorChange)="onEditorChange($event)" 
    <!-- CKEditor change event -->
    (ready)="onReady($event)"
    (focus)="onFocus($event)"
    (blur)="onBlur($event)"
    (contentDom)="onContentDom($event)"
    (fileUploadRequest)="onFileUploadRequest($event)"
    (fileUploadResponse)="onFileUploadResponse($event)"
    (paste)="onPaste($event)"
    (drop)="onDrop($event)"
    debounce="500">
  </ckeditor>
  `,
  styleUrls: ['./rich-text-editor.component.css']
})
export class RichTextEditorComponent implements OnInit {

  constructor() { }

  @Output()
  emitter = new EventEmitter<string>();
  ckeditorContent: string = '<p>Note Details...</p>';

  ngOnInit(): void {}

  saveNewNote(event : any){
    this.emitter.emit(this.ckeditorContent)
  }

}
