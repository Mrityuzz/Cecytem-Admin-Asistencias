/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Asistencia.serviceService } from './asistencia.service.service';

describe('Service: Asistencia.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Asistencia.serviceService]
    });
  });

  it('should ...', inject([Asistencia.serviceService], (service: Asistencia.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
