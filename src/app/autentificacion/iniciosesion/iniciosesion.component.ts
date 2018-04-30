import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';
/*Impotaciones para usar los formularios, validaciones, enrutado y el servicio */


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  loginForm: FormGroup; /*Nombre del formGroup del html */
  userdata: any; /*Nombre de el objeto donde se registraran los datos */
  
  mensaje = false; //variable booleana para el mensaje


    /*constructor donde se llama a AutentificacionService */

  constructor(private formBuilder: FormBuilder,
              private autentificacionService: AutentificacionService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  //metodo donde se inicializan los elementos del formulario y se colocan validaciones

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        'email': ['', [Validators.required, Validators.email ] ],
        'password': ['', [Validators.required, 
        Validators.pattern('^(?=.*[0-9])(?=/*[a-zA-Z])([a-zA-Z0-9]+$)'), 
        Validators.minLength(8)
      ]] 
    })
  }

  //metodo que se ejecuta del componente html, verifica los datos de registro haciendo uso de AutentificacionService
  //si no esta registrado o los datos son incorrectos, mostrara un mensaje 
  onSubmit(){
    this.userdata = this.saveUserdata();
    this.autentificacionService.inicioSesion(this.userdata);
    setTimeout(() => {
      if(this.isAuth() === false ) {
        this.mensaje = true;
      }
    }, 2000);
  }


  //metodo donde registran los datos del formulario

  saveUserdata(){
    const saveUserdata = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }

    return saveUserdata;
}


//metodo que verifica si esta autentificado ayudandose de AutentificacionService

  isAuth(){
    return this.autentificacionService.isAuthenticated();
  }
}
