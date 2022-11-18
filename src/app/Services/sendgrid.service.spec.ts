import { TestBed } from '@angular/core/testing';

import { SendgridService } from './sendgrid.service';

describe('SendgridService', () => {
  let service: SendgridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendgridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
