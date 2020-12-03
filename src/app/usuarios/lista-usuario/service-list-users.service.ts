import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ServiceListUsersService {

  constructor( private service: HttpClient) { }

  getUsers(){
    return this.service.get('https://nameless-plains-49486.herokuapp.com/api/users')
  }
  getUser(dni: number){
    return this.service.get('https://nameless-plains-49486.herokuapp.com/api/users/' + dni)
  }
  pushFichaMedica(forma){
    console.log("estoy enviando")
    
    console.log(forma)
    return this.service.post('https://nameless-plains-49486.herokuapp.com/api/medic',forma)
  }
}
