import {Hero} from '../Model/hero';
import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {

  private path = '/heroes';  // URL to web api

  constructor(private api: ApiService) {}

  search(term: string): Observable<Hero[]> {
    return this.api
      .get(this.path + '/' + 'n=' + term)
      .map(response => response.json() as Hero[]);
  }
}
