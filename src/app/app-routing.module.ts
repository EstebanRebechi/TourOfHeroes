import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {HeroDetailComponent} from './Components/hero-detail/hero-detail.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import {HomeComponent} from './Components/home/home.component';
import {LoginComponent} from './Components/login/login.component';
import {AuthGuard} from './authguard';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard]},
  {path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
