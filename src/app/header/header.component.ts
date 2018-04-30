import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service'; 
import { Router, ActivatedRoute } from '@angular/router';
/*Impotaciones para usar los formularios, validaciones, enrutado y el servicio */


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    //Constructor que inicializan las funciones.
  constructor(private autentificacionService: AutentificacionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

    //permite saber si se esta autentificado o no
  isAuth(){
    return this.autentificacionService.isAuthenticated();
  }

    //nos desloguea de la app
  onLogout(){
    this.autentificacionService.logout();
    this.router.navigate(['/inicio']);
  }

}
