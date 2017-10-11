import {AuthenticationService} from './services/authentication.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
