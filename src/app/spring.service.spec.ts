import { TestBed, inject } from '@angular/core/testing';

import { SpringService } from './spring.service';

describe('SpringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpringService]
    });
  });

  it('should be created', inject([SpringService], (service: SpringService) => {
    expect(service).toBeTruthy();
  }));
});
