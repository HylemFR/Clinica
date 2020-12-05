import { Component, OnInit } from '@angular/core';
import { ServiceListUsersService} from './../lista-usuario/service-list-users.service'
import { PerfilUsuarioService} from './service/perfil-usuario.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  informacion :any
  existeInformacion = false
  codigo : String
  fichas : any
  existeFichaMedicas = false
  

  constructor( private service : ServiceListUsersService, private route: ActivatedRoute,private perfil : PerfilUsuarioService ) { }

  ngOnInit(): void {
    this.loadData()
    setTimeout( ()=>{this.loadFichaMedicas() }, 1000)
    
  }

  loadData(){
    let dni=this.route.snapshot.params['dni'];
    this.service.getUser(dni).subscribe(
      (data) =>{
        this.informacion = data['user']
        this.codigo = data['user'].codigo
      },
      (error) =>{
        console.log(error)
      }
    )
    this.existeInformacion = true
  }

  loadFichaMedicas(){
    this.perfil.getFichaMedicas(this.codigo).subscribe(
      (data) => {
        this.fichas= data['usuario'].fichaMedica
        //console.log(data)
        //console.log(this.fichas)
      },
      error =>{
        console.log(error)
      }
    )
    this.existeFichaMedicas=true
  }

}
