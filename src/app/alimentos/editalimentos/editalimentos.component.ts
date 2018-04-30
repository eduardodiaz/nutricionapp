import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlimentosService } from '../../servicios/alimentos.service';
/*Impotaciones para usar los formularios, validaciones, enrutado y el servicio */


@Component({
  selector: 'app-editalimentos',
  templateUrl: './editalimentos.component.html',
  styleUrls: ['./editalimentos.component.css']
})
export class EditalimentosComponent implements OnInit {

  alimentoForm: FormGroup; /*Nombre del formGroup del html */
  alimento: any; /*Nombre de el objeto donde se registraran los datos */
  id: string; //id que se asigna a cada uno de los elementos de la lista


     /* Metodo donde se inicializan los componentes de la clase */

  constructor(private pf: FormBuilder,
              private alimentoService: AlimentosService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                this.activatedRouter.params //permite poder hacer o tomar rutas  por medio del id de cada elemento de la lista, hace uso de AlimentoService
                  .subscribe(parametros => {
                    this.id = parametros['id'];
                    this.alimentoService.getAlimento(this.id)
                      .subscribe(alimento => this.alimento = alimento)
                  });
               }

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
    this.alimentoService.putAlimento(this.alimento, this.id)
      .subscribe(newalimento => {
        this.router.navigate(['/alimentos'])
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
