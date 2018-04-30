import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutentificacionService } from '../servicios/autentificacion.service';
/*Impotaciones para usar los formularios, validaciones y el servicio */

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  calculadoraForm: FormGroup;  /*Nombre del formGroup del html */

    //variables utilizadas en los elementos inicializadas segun el standar
  peso: any;
  edad: any;
  talla: any; 
  pesoidealmin: any = 0;
  pesoidealmax: any = 0;
  geb: any = 0;
  eta: any = 1;
  facfis: any = 1.2;
  fiebre: any = 1;
  get: any = 0;
  hco: any;
  lip: any;
  prot: any;
  reshco: any = 0;
  reslip: any = 0;
  resprot: any = 0;


    //inicializacion en el constructor 
  constructor(private pf: FormBuilder,
    autentificacionService: AutentificacionService) { }

    //inicializacion, validacion de las variables
  ngOnInit() {
    this.calculadoraForm = this.pf.group({
      nombre: ['', Validators.required ],
      peso: ['', Validators.required ],
      edad: ['', Validators.required ],
      talla: ['', Validators.required],
      pesoidealmin: this.pesoidealmin,
      pesoidealmax: this.pesoidealmax,
      geb: this.geb,
      get: this.get,
      hco: this.hco,
      lip: this.lip,
      prot: this.prot,
      reshco: this.reshco,
      reslip: this.reslip,
      resprot: this.resprot
    });

    this.onChanges();

    }

    //registra los cambios en los elementos del html, realiza las operaciones en tiempo real

    onChanges(): void {
      this.calculadoraForm.valueChanges.subscribe(valor => {
        this.peso = valor.peso;
        this.edad = valor.edad;
        this.talla = valor.talla;
        this.hco = valor.hco;
        this.lip = valor.lip;
        this.prot = valor.prot;

        this.calculadoraForm.value.pesoidealmin = ((this.talla/100 * this.talla/100) * 18).toFixed(2);
        this.calculadoraForm.value.pesoidealmax = ((this.talla/100 * this.talla/100) * 24.8).toFixed(2);
        this.calculadoraForm.value.geb = (((10*this.peso)+ (6.25*this.talla)-(5*this.edad)) - 161).toFixed(2);
        this.calculadoraForm.value.get = ((((10*this.peso)+ (6.25*this.talla)-(5*this.edad)) - 161) * this.eta * this.facfis * this.fiebre).toFixed(2);
        this.calculadoraForm.value.reshco = (((((((10*this.peso)+ (6.25*this.talla)-(5*this.edad)) - 161) * this.eta * this.facfis * this.fiebre) * this.hco )/100)/4).toFixed(2);
        this.calculadoraForm.value.reslip = (((((((10*this.peso)+ (6.25*this.talla)-(5*this.edad)) - 161) * this.eta * this.facfis * this.fiebre) * this.lip )/100)/9).toFixed(2);
        this.calculadoraForm.value.resprot = (((((((10*this.peso)+ (6.25*this.talla)-(5*this.edad)) - 161) * this.eta * this.facfis * this.fiebre) * this.prot )/100)/4).toFixed(2);
      }) 
    }

}
