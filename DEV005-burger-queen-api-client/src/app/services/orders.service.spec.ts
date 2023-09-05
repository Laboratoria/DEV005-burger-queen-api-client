import { TestBed } from '@angular/core/testing';

import { OrderProductService } from './orderProduct.service';

describe('OrderProductService', () => {
  let service: OrderProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
