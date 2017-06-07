import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }   from './login.component';
import { HomeComponent }   from './home.component';

const routes: Routes = [
  { path: 'login/:access_token',  component: LoginComponent },
    { path: 'login',  component: LoginComponent },
    { path: '',  component: HomeComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes,{ useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
