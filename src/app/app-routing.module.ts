import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { FichaMedicaComponent } from './ficha-medica/ficha-medica.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RolesComponent } from './roles/roles.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { PerfilUsuarioComponent } from './usuarios/perfil-usuario/perfil-usuario.component';
import { UsuariosComponent } from './usuarios/lista-usuario/usuarios.component';
import { LoginGuard } from './login/guard/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: NavVerticalComponent,
    //canActivateChild:[],
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',  
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
        {
          path: 'crear-usuario',
          component: CrearUsuarioComponent
        },
        {
          path: 'perfil-usuario/:dni', 
          component: PerfilUsuarioComponent
        },
        {
          path: 'ficha-medica/:dni', 
          component: FichaMedicaComponent
        },
      {
        path: 'estadistica',
        component: EstadisticaComponent
      },
      {
        path: 'roles',
        component: RolesComponent
      },
      
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
