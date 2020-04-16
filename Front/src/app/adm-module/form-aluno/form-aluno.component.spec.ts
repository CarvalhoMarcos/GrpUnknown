import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlunoComponent } from './form-aluno.component';

describe('FormAlunoComponent', () => {
  let component: FormAlunoComponent;
  let fixture: ComponentFixture<FormAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
