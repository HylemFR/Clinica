import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioService {

  constructor(private service: HttpClient) { }

  getFichaMedicas(codigo:String){
    return this.service.get('https://nameless-plains-49486.herokuapp.com/api/medic/'+ codigo)
  }
}

