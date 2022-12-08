import { TestBed } from '@angular/core/testing';

import { ServicioConeccionService } from './servicio-coneccion.service';

describe('ServicioConeccionService', () => {
  let service: ServicioConeccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioConeccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
