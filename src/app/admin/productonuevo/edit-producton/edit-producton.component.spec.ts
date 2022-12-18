import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductonComponent } from './edit-producton.component';

describe('EditProductonComponent', () => {
  let component: EditProductonComponent;
  let fixture: ComponentFixture<EditProductonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
