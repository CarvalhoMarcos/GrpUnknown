import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarExameComponent } from './registrar-exame.component';

describe('RegistrarExameComponent', () => {
  let component: RegistrarExameComponent;
  let fixture: ComponentFixture<RegistrarExameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarExameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
