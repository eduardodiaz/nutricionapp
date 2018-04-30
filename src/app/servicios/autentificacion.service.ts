import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
/**importaciones realizadas para que trabaje el sercivio de los inicios de sesion y registro
 * tambien usa el enrutado para en caso que pueda acceder, lo redirija a inicio  */

@Injectable()
export class AutentificacionService {

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute) { }

  //registra a usuarios haciendo uso de email valido y password
  registroUsuario(userdata){
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
      .catch(error => {
        console.log(error);
      })
  }

  //si se tiene credenciales para acceder, entra dirigiendonos a inicio
  inicioSesion(userdata){
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(
        error => {
          console.log(error);
        }
      )
  }
//verifica si un usuario esta autentificado con ayuda de firebase
  isAuthenticated(){
    const user = firebase.auth().currentUser;
    if(user){
      return true;
    } else {
      return false;
    }
  }

  //nos desloguea de la app
  logout(){
    firebase.auth().signOut();
  }


}
