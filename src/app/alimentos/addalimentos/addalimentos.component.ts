import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlimentosService } from '../../servicios/alimentos.service';
/*Impotaciones para usar los formularios, validaciones y el servicio */


@Component({
  selector: 'app-addalimentos',
  templateUrl: './addalimentos.component.html',
  styleUrls: ['./addalimentos.component.css']
})
export class AddalimentosComponent implements OnInit {

  alimentoForm: FormGroup; /*Nombre del formGroup del html */
  alimento: any; /*Nombre de el objeto donde se registraran los datos */

  /*Constructor donde se crean los metodos de la clase */

  constructor(private pf: FormBuilder,
              private alimentoService: AlimentosService) { }

  /* Metodo donde se inicializan los componentes de la clase */

  ngOnInit() {
    this.alimentoForm = this.pf.group({
      alimento: ['', Validators.required ],
      medida: ['', Validators.required ],
      pesobruto: ['', Validators.required ],
      tipo: ['', Validators.required ]
    });
  }

  /*Metodo onSubmit que se desencadena cuando se ocurre dicho metodo y ejecuta las acciones que estan dentro de él */

  onSubmit(){
    this.alimento = this.saveAlimento();
    this.alimentoService.postAlimentos(this.alimento)
      .subscribe(newalimento => {

      })
      this.alimentoForm.reset();
  }

    /*Metodo que almacena los datos del objeto que es llamado por onSubmit */

  saveAlimento(){
    const saveAlimento = {
      alimento: this.alimentoForm.get('alimento').value,
      medida: this.alimentoForm.get('medida').value,
      pesobruto: this.alimentoForm.get('pesobruto').value,
      tipo: this.alimentoForm.get('tipo').value
    }
    
    return saveAlimento;
  }

}
