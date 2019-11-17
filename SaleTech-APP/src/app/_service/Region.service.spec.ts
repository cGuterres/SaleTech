/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegionService } from './Region.service';

describe('Service: Region', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionService]
    });
  });

  it('should ...', inject([RegionService], (service: RegionService) => {
    expect(service).toBeTruthy();
  }));
});
