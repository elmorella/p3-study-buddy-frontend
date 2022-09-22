import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSetComponent } from './button-set.component';

describe('ButtonSetComponent', () => {
  let component: ButtonSetComponent;
  let fixture: ComponentFixture<ButtonSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
