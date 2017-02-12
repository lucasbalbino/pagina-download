/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MateriaisService } from './materiais.service';

describe('MateriaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MateriaisService]
    });
  });

  it('should ...', inject([MateriaisService], (service: MateriaisService) => {
    expect(service).toBeTruthy();
  }));
});
