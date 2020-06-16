import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProfComponent } from './cadastro-prof.component';

describe('CadastroProfComponent', () => {
  let component: CadastroProfComponent;
  let fixture: ComponentFixture<CadastroProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
