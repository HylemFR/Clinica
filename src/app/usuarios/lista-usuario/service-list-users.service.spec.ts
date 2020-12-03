import { TestBed } from '@angular/core/testing';

import { ServiceListUsersService } from './service-list-users.service';

describe('ServiceListUsersService', () => {
  let service: ServiceListUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
