import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductonComponent } from './new-producton.component';

describe('NewProductonComponent', () => {
  let component: NewProductonComponent;
  let fixture: ComponentFixture<NewProductonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
