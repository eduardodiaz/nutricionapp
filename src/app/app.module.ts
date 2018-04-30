import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//importaciones hechas para trabajar con formularios, rutas, modulos de formularios, peticiones http


//Elementos o componentes dentro de la app, asi como tambien servicios que esta utiliza
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlimentosComponent } from './alimentos/alimentos/alimentos.component';
import { AddalimentosComponent } from './alimentos/addalimentos/addalimentos.component';
import { EditalimentosComponent } from './alimentos/editalimentos/editalimentos.component';
import { AlimentosService } from './servicios/alimentos.service';
import { PacientesComponent } from './pacientes/pacientes/pacientes.component';
import { AddpacientesComponent } from './pacientes/addpacientes/addpacientes.component';
import { EditpacientesComponent } from './pacientes/editpacientes/editpacientes.component';
import { PacientesService } from './servicios/pacientes.service';
import { AntecedentesComponent } from './antecedentes/antecedentes/antecedentes.component';
import { AddantecedentesComponent } from './antecedentes/addantecedentes/addantecedentes.component';
import { EditantecedentesComponent } from './antecedentes/editantecedentes/editantecedentes.component';
import { AntecedentesService } from './servicios/antecedentes.service';
import { SeguimientosComponent } from './seguimientos/seguimientos/seguimientos.component';
import { AddseguimientosComponent } from './seguimientos/addseguimientos/addseguimientos.component';
import { EditseguimientosComponent } from './seguimientos/editseguimientos/editseguimientos.component'; 
import { SeguimientosService } from './servicios/seguimientos.service';
import { RegistoComponent } from './autentificacion/registo/registo.component';
import { AutentificacionService } from './servicios/autentificacion.service';
import { IniciosesionComponent } from './autentificacion/iniciosesion/iniciosesion.component';
import { GuardService } from './servicios/guard.service';
import { TablaalimentosComponent } from './tablaalimentos/tablaalimentos/tablaalimentos.component';


//rutas las que podemos acceder tanto si estamos logueados, como si no lo estamos...canActivate, nos permite proteger la ruta para que solo se pueda acceder mediante logueo
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'alimentos', component: AlimentosComponent, canActivate: [GuardService] },
  { path: 'addalimento', component: AddalimentosComponent, canActivate: [GuardService] },
  { path: 'editalimento/:id', component: EditalimentosComponent, canActivate: [GuardService] },
  { path: 'pacientes', component: PacientesComponent, canActivate: [GuardService] },
  { path: 'addpacientes', component: AddpacientesComponent, canActivate: [GuardService] },
  { path: 'editpacientes/:id', component: EditpacientesComponent, canActivate: [GuardService] },
  { path: 'antecedentes', component: AntecedentesComponent, canActivate: [GuardService] },
  { path: 'addantecedentes', component: AddantecedentesComponent, canActivate: [GuardService] },
  { path: 'editantecedentes/:id', component: EditantecedentesComponent, canActivate: [GuardService] },
  { path: 'seguimientos', component: SeguimientosComponent, canActivate: [GuardService] },
  { path: 'addseguimientos', component: AddseguimientosComponent, canActivate: [GuardService] },
  { path: 'editseguimientos/:id', component: EditseguimientosComponent, canActivate: [GuardService] },
  { path: 'tablaalimentos', component: TablaalimentosComponent, canActivate: [GuardService] },
  { path: 'registro', component: RegistoComponent },
  { path: 'iniciosesion', component: IniciosesionComponent },
  { path: '**', component: InicioComponent }
];
 


//modulos agregados en ngModule
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    AlimentosComponent,
    AddalimentosComponent,
    EditalimentosComponent,
    PacientesComponent,
    AddpacientesComponent,
    EditpacientesComponent,
    AntecedentesComponent,
    AddantecedentesComponent,
    EditantecedentesComponent,
    SeguimientosComponent,
    AddseguimientosComponent,
    EditseguimientosComponent,
    RegistoComponent,
    IniciosesionComponent,
    TablaalimentosComponent
    ],
    //importaciones que nos permiten trabajar con los servicios arriba importados
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, 
    ReactiveFormsModule,
    HttpModule
  ],
  //proveedores, servicios...son los servicios que declaramos para utilizar dentro de la app, si no los colocamos en providers, nuestra app puede contenerlos pero uno utilizarlos
  providers: [AlimentosService, 
              PacientesService,
              AntecedentesService,
              SeguimientosService,
              AutentificacionService,
              GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
