import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private url: string = "http://localhost:4003/login";
  // public token: string = "";
  
  constructor(private http : HttpClient) { }

  autenticaUser(dados : any) : Promise<any> {
    //const body = JSON.stringify(dados);
    return this.http.post(this.url, dados).toPromise()
    // .then(this.extractData)
    // .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.log('Um erro ocoreu: ' +  error.message);
    console.log(error);
    return Promise.reject(error.message || error);
  }

}
