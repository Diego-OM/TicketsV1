import { TestBed } from '@angular/core/testing';

import { QRServicesService } from './qrservices.service';

describe('QRServicesService', () => {
  let service: QRServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QRServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
