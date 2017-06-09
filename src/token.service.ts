import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

private token='';
getToken(): string {
   return this.token;
 }
 setToken(token: string){
   this.token = token;
 }


}
