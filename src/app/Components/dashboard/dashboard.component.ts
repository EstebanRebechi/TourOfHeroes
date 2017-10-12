import {Hero} from '../../Model/hero';
import {HeroService} from '../../Services/hero.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5),
      error => {
        this.router.navigate(['login']);
        console.error('An error occurred in dashboard component, navigating to login: ', error);
      });
  }

}
