import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMedicoComponent } from './form-medico.component';

describe('FormMedicoComponent', () => {
  let component: FormMedicoComponent;
  let fixture: ComponentFixture<FormMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
