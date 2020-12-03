import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  httpOptions : any
  
  constructor(private httpCliente: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
   }
  
  Login(email: String, contraseña: String){
    return this.httpCliente.post('https://nameless-plains-49486.herokuapp.com/api/auth/signin', { "email": email, "password": contraseña},this.httpOptions)
  }

  //guardo el token
  setToken(token){
    localStorage.setItem("accessToken",token)
  }
  //obtengo eltoken, si lo requiero
  getToken() {
    return localStorage.getItem("accessToken");
  }

  // guardo, sí es administrador
  setIsadmin(user){
    localStorage.setItem("admi",user)
  }
    // obtnego,sí es administrador
  getisadmi() {
    return localStorage.getItem("admi");
  }

  tipoSangre() {
    return  this.httpCliente.get('https://nameless-plains-49486.herokuapp.com/api/tipo-sangre')
  }
  CheckMinsa(control: FormControl){
    if( control.value){
      
    }
  }
  CheckEsalud(control: FormControl){
    if( control.value){
      
    }
  }
}
