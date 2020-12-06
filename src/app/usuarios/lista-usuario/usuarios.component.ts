import { Component, OnInit } from '@angular/core';
import {ServiceListUsersService} from './service-list-users.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  datausers = []
  info = false
  constructor( private serviceUsers: ServiceListUsersService
               ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.serviceUsers.getUsers().subscribe(
      data => {
        //console.log(data['users'])
        this.datausers = data['users']
        //console.log(this.datausers)
        this.info=true
      }
    )
  }

}