import { TestBed, inject } from '@angular/core/testing';

import { AddChildService } from './add-child.service';

describe('AddChildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddChildService]
    });
  });

  it('should ...', inject([AddChildService], (service: AddChildService) => {
    expect(service).toBeTruthy();
  }));
});
