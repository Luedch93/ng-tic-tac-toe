import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    service = new StateService();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an array of nulls as initial state', () => {
      expect(service.state.length).toBe(9);
      const nulls = service.state.filter(cellValue => cellValue == null);
      expect(nulls.length).toBe(9);
  })
});
