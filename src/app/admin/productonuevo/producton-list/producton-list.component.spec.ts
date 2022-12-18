import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductonListComponent } from './producton-list.component';

describe('ProductonListComponent', () => {
  let component: ProductonListComponent;
  let fixture: ComponentFixture<ProductonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
