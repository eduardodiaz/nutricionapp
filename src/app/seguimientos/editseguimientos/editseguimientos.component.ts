import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SeguimientosService } from '../../servicios/seguimientos.service';



@Component({
  selector: 'app-editseguimientos',
  templateUrl: './editseguimientos.component.html',
  styleUrls: ['./editseguimientos.component.css']
})
export class EditseguimientosComponent implements OnInit {

  seguimientoForm: FormGroup;
  seguimiento: any;
  id: string;

  constructor(private pf: FormBuilder,
              private seguimientoService: SeguimientosService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { 
                this.activatedRouter.params 
                  .subscribe(parametros => {
                    this.id = parametros['id'];
                    this.seguimientoService.getSeguimiento(this.id) 
                      .subscribe(seguimiento => this.seguimiento = seguimiento)
                  });
              }

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

  onSubmit(){
    this.seguimiento = this.saveSeguimiento();
    this.seguimientoService.postSeguimientos(this.seguimiento)
      .subscribe(newseguimiento => {

      })
      this.seguimientoForm.reset();
  }

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
