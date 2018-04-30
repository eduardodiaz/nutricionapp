import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AntecedentesService } from '../../servicios/antecedentes.service';
/*Impotaciones para usar los formularios, validaciones, enrutado y el servicio */



@Component({
  selector: 'app-editantecedentes',
  templateUrl: './editantecedentes.component.html',
  styleUrls: ['./editantecedentes.component.css']
})
export class EditantecedentesComponent implements OnInit {

  antecedenteForm: FormGroup; /*Nombre del formGroup del html */
  antecedente: any;  /*Nombre de el objeto donde se registraran los datos */
  id: string; //id que se asigna a cada uno de los elementos de la lista


       /* Metodo donde se inicializan los componentes de la clase */
  constructor(private pf: FormBuilder,
              private antecedenteService: AntecedentesService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                this.activatedRouter.params  //permite poder hacer o tomar rutas  por medio del id de cada elemento de la lista, hace uso de AntecedentesService
                  .subscribe(parametros => {
                    this.id = parametros['id'];
                    this.antecedenteService.getAntecedente(this.id) 
                      .subscribe(antecedente => this.antecedente = antecedente)
                  });
               }

  /* Metodo donde se inicializan los componentes de la clase */

  ngOnInit() {
    this.antecedenteForm = this.pf.group({
      nombre: ['', Validators.required ],
      enfdiag: ['', Validators.required ],
      sintomas: ['', Validators.required ],
      medicamentos: ['', Validators.required ],
      famenf: ['', Validators.required ],
      desayuno: ['', Validators.required ],
      comida: ['', Validators.required ],
      cena: ['', Validators.required ],
      entrecomidas: ['', Validators.required ],
      hrdesayuno: ['', Validators.required ],
      hrcomida: ['', Validators.required ],
      hrcena: ['', Validators.required ],
      hrentrecomidas: ['', Validators.required ]
    });
  }

    /*Metodo onSubmit que se desencadena cuando se ocurre dicho metodo y ejecuta las acciones que estan dentro de él */

  onSubmit(){
    this.antecedente = this.saveAntecedente();
    this.antecedenteService.putAntecedente(this.antecedente, this.id)
      .subscribe(newantecedente => {
        this.router.navigate(['/antecedentes'])
      })
      this.antecedenteForm.reset();
}


    /*Metodo que almacena los datos del objeto que es llamado por onSubmit */

saveAntecedente(){
  const saveAntecedente = {
    nombre: this.antecedenteForm.get('nombre').value,
    enfdiag: this.antecedenteForm.get('enfdiag').value,
    sintomas: this.antecedenteForm.get('sintomas').value,
    medicamentos: this.antecedenteForm.get('medicamentos').value,
    famenf: this.antecedenteForm.get('famenf').value,
    desayuno: this.antecedenteForm.get('desayuno').value,
    comida: this.antecedenteForm.get('comida').value,
    cena: this.antecedenteForm.get('cena').value,
    entrecomidas: this.antecedenteForm.get('entrecomidas').value,
    hrdesayuno:  this.antecedenteForm.get('hrdesayuno').value,
    hrcomida:  this.antecedenteForm.get('hrcomida').value,
    hrcena: this.antecedenteForm.get('hrcena').value,
    hrentrecomidas: this.antecedenteForm.get('hrentrecomidas').value
  
    
  }

  return saveAntecedente;
}
}