import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductonComponent } from './form-historiaclinica.component';

describe('FormProductonComponent', () => {
  let component: FormProductonComponent;
  let fixture: ComponentFixture<FormProductonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProductonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
