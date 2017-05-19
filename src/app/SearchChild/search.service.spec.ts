/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChildSearchService } from './search.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildSearchService]
    });
  });

  it('should ...', inject([ChildSearchService], (service: ChildSearchService) => {
    expect(service).toBeTruthy();
  }));
});
