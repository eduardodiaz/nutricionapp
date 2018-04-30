import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AntecedentesService } from '../../servicios/antecedentes.service';
/*Impotaciones para usar los formularios, validaciones y el servicio */


@Component({
  selector: 'app-addantecedentes',
  templateUrl: './addantecedentes.component.html',
  styleUrls: ['./addantecedentes.component.css']
})
export class AddantecedentesComponent implements OnInit {

  antecedenteForm: FormGroup; /*Nombre del formGroup del html */
  antecedente: any;  /*Nombre de el objeto donde se registraran los datos */

    /*Constructor donde se crean los metodos de la clase */

  constructor(private pf: FormBuilder,
              private antecedenteService: AntecedentesService) { }

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
    this.antecedenteService.postAntecedentes(this.antecedente)
      .subscribe(newantecedente => {

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
