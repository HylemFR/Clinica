import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { LoginService} from './../login/service/login.service'
import { ServiceListUsersService} from '../usuarios/lista-usuario/service-list-users.service'
import { ActivatedRoute,Router } from '@angular/router'; 

@Component({
  selector: 'app-ficha-medica',
  templateUrl: './ficha-medica.component.html',
  styleUrls: ['./ficha-medica.component.css']
})


export class FichaMedicaComponent implements OnInit {

  forma: FormGroup;
  sangres = [];
  User : any
  anios = [{ 'valor': 2020}, {'valor': 2021}]
  anio: Number


  constructor( private fb: FormBuilder, private service: LoginService, private activatedRoute : ActivatedRoute, private userService :ServiceListUsersService,private router: Router) { 

    this.crearFormulario()
    
  }

  ngOnInit(): void {
    this.getSangre();    
    
  }


  getSangre(){
    this.service.tipoSangre()
      .subscribe( data => {
        this.sangres= data['listado']
        console.log(this.sangres )
      });
  }

  get diagnosticos() {
    return this.forma.get('diagnosticos') as FormArray;
  }
  get medicamentoHabituales() {
    return this.forma.get('medicamentosHabitual') as FormArray;
  }

  get MedicamentosAlergicos(){
    return this.forma.get('medicamentosAlergicos') as FormArray
  }



  async crearFormulario() {

    let dni=this.activatedRoute.snapshot.params['dni'];
    const email = await this.userService.getUser(dni).toPromise()

    this.forma = this.fb.group({

      diagnosticos: this.fb.array([]),
      medicamentosHabitual: this.fb.array([]),
      medicamentosAlergicos: this.fb.array([]),
      sangre : '',
      seguros: this.fb.group({
        UNMSM : false,
        MINSA : false,
        ESSALUD: false,
        EPS: ''
      }),
      email : email['user'].email,
      anio : '' 


    });
    console.log(this.forma)

  }

  /*  SEGURO  */
  checkboxMinsa() {
      if(!this.forma.get('seguros').value['MINSA'] == true){
        this.forma.get('seguros').patchValue({'ESSALUD' : false})
      }
    
  }
  checkboxEssalud() {
    if(!this.forma.get('seguros').value['ESSALUD'] == true){
      this.forma.get('seguros').patchValue({'MINSA' : false})
    }
  
}


  agregarMedicamentoAlergico() {
    this.MedicamentosAlergicos.push( this.fb.control(''));
  }
  
  borrarMedicamentoAlergico(i: number) {
    this.MedicamentosAlergicos.removeAt(i);
  }



  agregarDiagnostico() {
    this.diagnosticos.push( this.fb.control(''));
  }
  
  borrarDiagnostico(i: number) {
    this.diagnosticos.removeAt(i);
  }

  agregarMedicamentoHabitual() {
    const medicina = this.fb.group({
      nombre: '',
      dosis: '',
      cantidad: '',
      periodo: ''
    });
    this.medicamentoHabituales.push( medicina);
  }
  
  borrarMedicamentoHabitual(i: number) {
    this.medicamentoHabituales.removeAt(i);
  }


  guardar() {
    if ( this.forma.invalid ) {

      return Object.values( this.forma.controls ).forEach( control => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
        
        
      });
     
    }
   this.userService.pushFichaMedica(this.forma.value).subscribe(
     (data)=>{
       console.log("enviado bien")
       this.router.navigate(['../inicio']);

     },
     error =>{
      console.log("errorrrrrr")
     }
   )

  }

}