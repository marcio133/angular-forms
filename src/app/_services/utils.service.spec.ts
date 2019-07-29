import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilsService = TestBed.get(UtilsService);
    expect(service).toBeTruthy();
  });

  it('getFormatedDate should return 19/07/2019', () => {
    const service: UtilsService = TestBed.get(UtilsService);

    const date = new Date('07/19/2019');
    const formatedDate = service.getFormatedDate(date);

    expect(formatedDate).toBe('19/07/2019');
  });
});
