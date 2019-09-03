import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ConfigurationComponent} from './components/configuration/configuration.component';
import {ClientEditComponent} from './components/client-edit/client-edit.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'client/edit/:id', component: ClientEditComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
