import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  private authUrl = 'http://localhost:8080/login';
  private token;

  constructor(private http: Http) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.post(this.authUrl, {}, {headers: headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        if (response.ok) {
          console.log(response.headers.keys());
          const token = response.headers.get('authorization').substr('Bearer'.length);
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    const token = currentUser && currentUser.token;
    return token ? token : '';
  }

  isLoggedIn(): boolean {
    const token: String = this.getToken();
    return token && token.length > 0;
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
