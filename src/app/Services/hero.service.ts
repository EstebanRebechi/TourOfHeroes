import {Hero} from '../Model/hero';
import {AuthenticationService} from '../services/authentication.service';
import {ApiService} from './api.service';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private path = '/heroes';

  constructor(private authenticationService: AuthenticationService, private api: ApiService) {}

  getHeroes(): Promise<Hero[]> {
    return this.api.get(this.path)
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = this.path + '/' + id;
    return this.api.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = this.path + '/' + hero.id;
    return this.api
      .put(url, hero)
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    const hero = new Hero;
    hero.name = name;
    return this.api
      .post(this.path, hero)
      .toPromise()
      .then(res => res.json() as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = this.path + '/' + id;
    return this.api.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
