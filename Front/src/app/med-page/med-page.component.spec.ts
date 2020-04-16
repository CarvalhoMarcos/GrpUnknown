import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedPageComponent } from './med-page.component';

describe('MedPageComponent', () => {
  let component: MedPageComponent;
  let fixture: ComponentFixture<MedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
