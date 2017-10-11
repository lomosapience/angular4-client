import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClickerService {

  countUrl = 'http://localhost:8080/api/count';

  constructor(private http: Http) { };

  getCount(): Promise<any> {
    return this.http.get(this.countUrl)
      .toPromise()
      .then(response => JSON.parse(JSON.stringify(response)))
      .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject('My error' || error.message || error);
  }

}
