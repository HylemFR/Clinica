import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {
  httpOptions: any;

  constructor(private httpCliente: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
   }

  User(forma){
    
    return this.httpCliente.post('https://nameless-plains-49486.herokuapp.com/api/users', forma);

  }
}