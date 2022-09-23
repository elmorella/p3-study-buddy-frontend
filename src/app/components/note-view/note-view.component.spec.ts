import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteViewComponent } from './note-view.component';

describe('NoteViewComponent', () => {
  let component: NoteViewComponent;
  let fixture: ComponentFixture<NoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
