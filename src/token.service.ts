import { Injectable } from '@angular/core';
import { Headers, Jsonp,Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TokenService {

private token='';
private headers = new Headers({'Content-Type': 'application/json'});
private profileUrl = 'https://yakup-kaygusuz-dev-ed.my.salesforce.com/services/data/v24.0/chatter/users/me'

   constructor(private http: Http) { }

getToken(): string {
   return this.token;
 }
 setToken(token: string){
   this.token = token;
 }
getProfile(){
  this.headers.append('Authorization','Bearer '+this.getToken());
  return this.http.get(this.profileUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
}
private extractData(res: Response) {
  let body = res.json();
  console.log(body.data);
  return body.data || { };
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}
