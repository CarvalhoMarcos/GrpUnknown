import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMedComponent } from './cadastro-med.component';

describe('CadastroMedComponent', () => {
  let component: CadastroMedComponent;
  let fixture: ComponentFixture<CadastroMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
