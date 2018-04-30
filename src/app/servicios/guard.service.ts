import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutentificacionService } from './autentificacion.service';
//hace importaciones para poder proteger las rutas a las que les implementemos el servicio de guardService
@Injectable()
export class GuardService implements CanActivate {

  constructor(private autentificacionService: AutentificacionService) { }

  //solo si esta autentificado, podras acceder a cierto contenido
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.autentificacionService.isAuthenticated();
  }
}
