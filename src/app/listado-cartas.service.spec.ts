import { TestBed } from '@angular/core/testing';

import { ListadoCartasService } from './listado-cartas.service';

describe('ListadoCartasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListadoCartasService = TestBed.get(ListadoCartasService);
    expect(service).toBeTruthy();
  });
});
