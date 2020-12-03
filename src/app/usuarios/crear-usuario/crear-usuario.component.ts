import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CrearUsuarioService } from './service/crear-usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers: [CrearUsuarioService]
})
export class CrearUsuarioComponent implements OnInit {

  titulo = "Crear Usuario";
  //form: FormGroup;
  codigo: String;
  nombres: String;
  apellidos: String;
  dni:String;
  email:String;
  password: String;
  direccion:String;
  telefono:String;
  

  constructor(private serviceUser: CrearUsuarioService ) { }

  ngOnInit(): void {

  }

  user(){
    console.log(this.codigo)
    console.log(this.nombres)
    console.log(this.apellidos) 
    console.log(this.dni) 
    console.log(this.email) 
    console.log(this.password) 
    console.log(this.direccion) 
    console.log(this.telefono) 
     
    
    this.serviceUser.User(this.codigo, this.nombres, this.apellidos, this.dni, this.email, this.password, this.direccion, this.telefono).subscribe(   
      (data) => {
        console.log(data)
        
      },
      (error) => {
        console.log(error)
      }
    )
  }

 /*guardar(){
    this.serviceUser.User(this.codigo, this.nombres, this.apellidos, this.dni, this.email, this.password, this.direccion, this.telefono, )
      .subscribe(  
        rt => console.log(rt),
        er => console.log(er),
        () => console.log('fin')
      );

  }*/
}
