import {AuthenticationService} from '../services/authentication.service';
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private url = 'http://localhost:8080';

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: Http, private authenticationService: AuthenticationService) {}

  get(path: String): Observable<any> {
    const dir = this.url + path;
    if (this.headers.has('Authorization')) {
      this.headers.delete('Authorization');
    }
    this.headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken);
    return this.http.get(dir, {headers: this.headers});
  }

  put(path: String, body): Observable<any> {
    const dir = this.url + path;
    if (this.headers.has('Authorization')) {
      this.headers.delete('Authorization');
    }
    this.headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken);
    return this.http.put(dir, JSON.stringify(body), {headers: this.headers});
  }

  post(path: String, body): Observable<any> {
    const dir = this.url + path;
    if (this.headers.has('Authorization')) {
      this.headers.delete('Authorization');
    }
    this.headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken);
    return this.http.put(dir, JSON.stringify(body), {headers: this.headers});
  }

  delete(path: String): Observable<any> {
    const dir = this.url + path;
    if (this.headers.has('Authorization')) {
      this.headers.delete('Authorization');
    }
    this.headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken);
    return this.http.put(dir, {headers: this.headers});
  }
}
