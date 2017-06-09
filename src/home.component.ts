import { Component } from '@angular/core';
import { TokenService } from './token.service';
@Component({
  selector: 'home',
  template: `<h1>Home</h1>
    {{tokenService.getToken()}}
  `,
})
export class HomeComponent  { name = 'Angular';
constructor(
  private tokenService: TokenService
){}
}
