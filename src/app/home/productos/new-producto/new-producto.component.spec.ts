import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMascotaComponent } from './new-mascota.component';

describe('NewMascotaComponent', () => {
  let component: NewMascotaComponent;
  let fixture: ComponentFixture<NewMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
