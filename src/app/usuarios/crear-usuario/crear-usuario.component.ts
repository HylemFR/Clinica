import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  forma: FormGroup;

  codigo: String;
  nombres: String;
  apellidos: String;
  dni:String;
  email:String;
  password: String;
  direccion:String;
  telefono:String;

  

  constructor(private fb: FormBuilder, private serviceUser: CrearUsuarioService, private ruta: Router) {
    this.crearForm();
   }

  ngOnInit(): void {
   
  }

  get codigoNoValido(){
      return this.forma.get('codigo').invalid && this.forma.get('codigo').touched;
  }
  get nombreNoValido(){
    return this.forma.get('nombres').invalid && this.forma.get('nombres').touched;
}

get apellidoNoValido(){
  return this.forma.get('apellidos').invalid && this.forma.get('apellidos').touched;
}

get dniNoValido(){
  return this.forma.get('dni').invalid && this.forma.get('dni').touched;
}

get emailNoValido(){
  return this.forma.get('email').invalid && this.forma.get('email').touched;
}

get passwordNoValido(){
  return this.forma.get('password').invalid && this.forma.get('password').touched;
}
get direccionNoValido(){
  return this.forma.get('direccion').invalid && this.forma.get('direccion').touched;
}
get telefonoNoValido(){
  return this.forma.get('telefono').invalid && this.forma.get('telefono').touched;
}

  

  crearForm(){
    this.forma = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      nombres : ['', [Validators.required, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}")]],
      apellidos: ['', [Validators.required, Validators.pattern("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,64}")]],
      dni: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

      //email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9!?-]{8,12}")]],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.minLength(7)]],
    }
    );
  }

  user(){

    console.log(this.forma);

    console.log(this.codigo)
    console.log(this.nombres)
    console.log(this.apellidos) 
    console.log(this.dni) 
    console.log(this.email) 
    console.log(this.password) 
    console.log(this.direccion) 
    console.log(this.telefono) 

    if(this.forma.invalid){
      Object.values(this.forma.controls).forEach(control =>{
        control.markAsTouched();
      });
      return;
    }
    
     
    
    this.serviceUser.User(this.codigo, this.nombres, this.apellidos, this.dni, this.email, this.password, this.direccion, this.telefono).subscribe(   
      (data) => {
        console.log(data)
        //this.router.navigate(["../usuarios"]);
        
      },
      (error) => {
        console.log(error)
      }
    )
  }

  listUser(){
       this.ruta.navigate(["../perfil-usuario/"+this.dni]);

  }


}
