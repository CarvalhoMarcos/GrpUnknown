import { TestBed } from '@angular/core/testing';

import { RegistrarExameService } from './registrar-exame.service';

describe('RegistrarExameService', () => {
  let service: RegistrarExameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarExameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
