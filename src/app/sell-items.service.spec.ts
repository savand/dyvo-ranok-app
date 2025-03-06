import { TestBed } from '@angular/core/testing';

import { SellItemsService } from './sell-items.service';

describe('SellItemsService', () => {
  let service: SellItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
