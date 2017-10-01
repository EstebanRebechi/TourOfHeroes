import {Hero} from '../Model/hero';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {

  private heroesUrl = 'http://localhost:8080/heroes';  // URL to web api

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(this.heroesUrl + '/' + 'n=' + term)
      .map(response => response.json() as Hero[]);
  }
}
