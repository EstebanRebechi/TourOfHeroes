import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './Components/hero-detail/hero-detail.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import {HeroService} from './Services/hero.service';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {HeroSearchComponent} from './Components/hero-search/hero-search.component';
import {LoginComponent} from './Components/login/login.component';
import {HomeComponent} from './Components/home/home.component';
import {HeroSearchService} from './Services/hero-search.service';
import {AuthGuard} from './authguard';
import {AuthenticationService} from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HeroService,
    HeroSearchService,
    AuthGuard,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
