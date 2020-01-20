import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareHinterComponent } from './square-hinter.component';

describe('SquareHinterComponent', () => {
  let component: SquareHinterComponent;
  let fixture: ComponentFixture<SquareHinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareHinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareHinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
