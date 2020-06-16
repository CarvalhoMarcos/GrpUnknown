import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPageComponent } from './prof-page.component';

describe('ProfPageComponent', () => {
  let component: ProfPageComponent;
  let fixture: ComponentFixture<ProfPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
