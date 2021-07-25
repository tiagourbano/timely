import { HttpParams } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { UtilsService } from './utils-service';

describe('UtilsService', () => {

  describe('Unit tests', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [UtilsService]
      });
    });

    it('should be created', inject([UtilsService], (utilsService: UtilsService) => {
      expect(utilsService).toBeTruthy();
    }));

    it('should format params', inject([UtilsService], (utilsService: UtilsService) => {
      const params = {
        param1: 'Param1',
        param2: 'Param2'
      };

      const formatted = UtilsService.buildQueryParams(params);

      expect(formatted.toString()).toEqual('param1=Param1&param2=Param2');
    }));
  });
});
