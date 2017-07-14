import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule,JsonpModule }    from '@angular/http';


import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component'
import { TokenService } from './token.service';
import { HomeComponent }   from './home.component';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
                FormsModule,
                AppRoutingModule,
                HttpModule,
                JsonpModule

],
  declarations: [ AppComponent, LoginComponent, HomeComponent ],
  providers: [ TokenService ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
