import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';
/*Impotaciones para usar los formularios, validaciones, enrutado y el servicio */


@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {

  registroForm: FormGroup; /*Nombre del formGroup del html */
  userdata: any; /*Nombre de el objeto donde se registraran los datos */
  
  
  //documento donde aparecen los elementos del formulario
  erroresForm ={
    'email': '',
    'password': ''
  }


  //validaciones que se mostraran en los elementos del formulario
  mensajeValidacion ={
    'email': {
      'required': 'Email obligatorio',
      'email': 'Introduzca un email correcto'
    },
    'password': {
      'required': 'Contraseña obligatoria',
      'pattern': 'La contraseña debe tener al menos un numero y una letra',
      'minlength': 'y mas de 8 caracteres'

    }
  }


    /*constructor donde se inicializa AutenficacionService, y los metodos de enrutado  */
  constructor(private formBuilder: FormBuilder,
              private autentificacionService: AutentificacionService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

//metodo que se ejecuta del componente html, verifica los datos de registro haciendo uso de AutentificacionService
  //si no esta registrado o los datos son incorrectos, mostrara un mensaje 
ngOnInit() {
    this.registroForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email ] ],
      'password': ['', [Validators.required, 
        Validators.pattern('^(?=.*[0-9])(?=/*[a-zA-Z])([a-zA-Z0-9]+$)'), 
        Validators.minLength(8)
      ]] 
    })

    this.registroForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }


//metodo que se ejecuta del componente html, verifica los datos de registro haciendo uso de AutentificacionService
  //si no esta registrado o los datos son incorrectos, mostrara un mensaje 
  //si estan correctos los datos de autenticacion, mandara al inicio de la app
  onSubmit(){
    this.userdata = this.saveUserdata();
    this.autentificacionService.registroUsuario(this.userdata);
    this.router.navigate(['/inicio']);
  }


    //metodo donde registran los datos del formulario

saveUserdata(){
    const saveUserdata = {
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value
    }

    return saveUserdata;
  }


  //muestra las validaciones en caso de que se presenten

  onValueChanged(data?: any) {
    if (!this.registroForm) { return; }
    const form = this.registroForm;
    for (const field in this.erroresForm) {
      
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajeValidacion[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
         }
       }
     }
   }
}
