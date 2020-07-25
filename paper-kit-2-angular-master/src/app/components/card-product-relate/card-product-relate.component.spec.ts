import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductRelateComponent } from './card-product-relate.component';

describe('CardProductRelateComponent', () => {
  let component: CardProductRelateComponent;
  let fixture: ComponentFixture<CardProductRelateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProductRelateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductRelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
