/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClassificationService } from './Classification.service';

describe('Service: Classification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassificationService]
    });
  });

  it('should ...', inject([ClassificationService], (service: ClassificationService) => {
    expect(service).toBeTruthy();
  }));
});
