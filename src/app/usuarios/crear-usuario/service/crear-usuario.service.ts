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

  User(codigo: String, nombres: String, apellidos:String, dni:String, email:String, password:String, direccion:String, telefono:String){
    
    return this.httpCliente.post('https://nameless-plains-49486.herokuapp.com/api/users', {"codigo":codigo, "nombres":nombres, "apellidos":apellidos, "dni":dni, "email": email, "password":password, "direccion":direccion, "telefono":telefono },this.httpOptions);

  }
}