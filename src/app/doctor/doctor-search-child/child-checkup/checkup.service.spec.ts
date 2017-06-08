import { TestBed, inject } from '@angular/core/testing';

import { CheckupService } from './checkup.service';

describe('CheckupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckupService]
    });
  });

  it('should be created', inject([CheckupService], (service: CheckupService) => {
    expect(service).toBeTruthy();
  }));
});
