import { HttpParams } from '@angular/common/http';

export class UtilsService {
  public static buildQueryParams(source: Object): HttpParams {
      let target: HttpParams = new HttpParams();
      Object.keys(source).forEach((key: string) => {
          const value: string | number | boolean | Date = source[key];
          if ((typeof value !== 'undefined') && (value !== null)) {
              target = target.append(key, value.toString());
          }
      });

      return target;
  }
}
