import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { TokenService } from './token.service';

@Component({

  selector: 'login',
  templateUrl: `login.component.html`
})
export class LoginComponent  implements OnInit {
  name = 'Angular';
consumerKey = '3MVG9ZL0ppGP5UrC2bHvPERv3LXM7sGLwzoZXko_PV5wmS1MbC3Vy3CJqcUrUBsL6AGRxMAEcaVB5_Kk_dxEi';
token = '';
constructor(
  private route: ActivatedRoute,
  private tokenService: TokenService
    ) {}
ngOnInit(): void {
this.route.fragment
  .subscribe(params => {
    if(params){
      this.tokenService.setToken(params.match(/^(.*?)&/)[1].replace('access_token=', ''));
    }
}
    );
}

login(): void {
  window.location.href = 'https://login.salesforce.com/services/oauth2/authorize?response_type=token&client_id='+this.consumerKey+'&redirect_uri=http://localhost:4200/#/login/?';
}
}
