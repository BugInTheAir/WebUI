import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewProductComponent } from './card-new-product.component';

describe('CardNewProductComponent', () => {
  let component: CardNewProductComponent;
  let fixture: ComponentFixture<CardNewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
