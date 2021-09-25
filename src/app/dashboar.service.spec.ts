import { TestBed } from '@angular/core/testing';

import { DashboarService } from './dashboar.service';

describe('DashboarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboarService = TestBed.get(DashboarService);
    expect(service).toBeTruthy();
  });
});
