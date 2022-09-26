import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCardRelationComponent } from './note-card-relation.component';

describe('NoteCardRelationComponent', () => {
  let component: NoteCardRelationComponent;
  let fixture: ComponentFixture<NoteCardRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteCardRelationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteCardRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
