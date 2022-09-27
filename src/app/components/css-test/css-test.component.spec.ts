import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTestComponent } from './css-test.component';

describe('CssTestComponent', () => {
  let component: CssTestComponent;
  let fixture: ComponentFixture<CssTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
