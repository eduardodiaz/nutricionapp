import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SeguimientosService } from '../../servicios/seguimientos.service';
/*Impotaciones para usar los formularios, validaciones, enrutado y el servicio */



@Component({
  selector: 'app-editseguimientos',
  templateUrl: './editseguimientos.component.html',
  styleUrls: ['./editseguimientos.component.css']
})
export class EditseguimientosComponent implements OnInit {

  seguimientoForm: FormGroup; /*Nombre del formGroup del html */
  seguimiento: any; /*Nombre de el objeto donde se registraran los datos */
  id: string; //id que se asigna a cada uno de los elementos de la lista


       /* Metodo donde se inicializan los componentes de la clase */
  constructor(private pf: FormBuilder,
              private seguimientoService: SeguimientosService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { 
                this.activatedRouter.params  //permite poder hacer o tomar rutas  por medio del id de cada elemento de la lista, hace uso de AlimentoService
                  .subscribe(parametros => {
                    this.id = parametros['id'];
                    this.seguimientoService.getSeguimiento(this.id) 
                      .subscribe(seguimiento => this.seguimiento = seguimiento)
                  });
              }
  /* Metodo donde se inicializan los componentes de la clase */
  ngOnInit() {
    this.seguimientoForm = this.pf.group({
      nombre: ['', Validators.required ],
      fecha: ['', Validators.required ],
      cintura: ['', Validators.required ],
      peso: ['', Validators.required ],
      gramos: ['', Validators.required ],
      imc: ['', Validators.required ],
      kilomasa: ['', Validators.required ],
      kcal: ['', Validators.required ],
      dtx: ['', Validators.required ],
      part: ['', Validators.required ]
    });
  }

  /*Metodo onSubmit que se desencadena cuando se ocurre dicho metodo y ejecuta las acciones que estan dentro de él */

  onSubmit(){
    this.seguimiento = this.saveSeguimiento();
    this.seguimientoService.putSeguimiento(this.seguimiento, this.id)
      .subscribe(newseguimiento => {
        this.router.navigate(['/seguimientos'])
      })
      this.seguimientoForm.reset();
  }

      /*Metodo que almacena los datos del objeto que es llamado por onSubmit */
  saveSeguimiento(){
    const saveSeguimiento = {
      nombre: this.seguimientoForm.get('nombre').value,
      fecha: this.seguimientoForm.get('fecha').value,
      cintura: this.seguimientoForm.get('cintura').value,
      peso: this.seguimientoForm.get('peso').value,
      gramos: this.seguimientoForm.get('gramos').value,
      imc: this.seguimientoForm.get('imc').value,
      kilomasa: this.seguimientoForm.get('kilomasa').value,
      kcal: this.seguimientoForm.get('kcal').value,
      dtx: this.seguimientoForm.get('dtx').value,
      part: this.seguimientoForm.get('part').value
    }

    return saveSeguimiento;
  }
}
