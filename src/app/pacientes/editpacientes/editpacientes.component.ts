import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PacientesService } from '../../servicios/pacientes.service';
/*Impotaciones para usar los formularios, validaciones, enrutado y el servicio */

@Component({
  selector: 'app-editpacientes',
  templateUrl: './editpacientes.component.html',
  styleUrls: ['./editpacientes.component.css']
})
export class EditpacientesComponent implements OnInit {

  pacienteForm: FormGroup; /*Nombre del formGroup del html */
  paciente: any; /*Nombre de el objeto donde se registraran los datos */
  id: string; //id que se asigna a cada uno de los elementos de la lista


     /* Metodo donde se inicializan los componentes de la clase */

  constructor(private pf: FormBuilder,
              private pacienteService: PacientesService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { 
                this.activatedRouter.params //permite poder hacer o tomar rutas  por medio del id de cada elemento de la lista, hace uso de AlimentoService
                  .subscribe(parametros => {
                    this.id = parametros['id'];
                    this.pacienteService.getPaciente(this.id)
                      .subscribe(paciente => this.paciente = paciente)
                  });
              }


/* Metodo donde se inicializan los componentes de la clase */

  ngOnInit() {

    this.pacienteForm = this.pf.group({
      paciente: ['', Validators.required ],
      edad: ['', Validators.required ],
      sexo: ['', Validators.required ],
      email: ['', Validators.required ],
      tel: ['', Validators.required ],
      ocupacion: ['', Validators.required ],
      direccion: ['', Validators.required ],
      motivoconsulta: ['', Validators.required ]
    });
  }


        /*Metodo onSubmit que se desencadena cuando se ocurre dicho metodo y ejecuta las acciones que estan dentro de él */

  onSubmit(){
    this.paciente = this.savePaciente();
    this.pacienteService.putPaciente(this.paciente, this.id)
      .subscribe(newpaciente => {
        this.router.navigate(['/pacientes'])

      })
      this.pacienteForm.reset();
  }


        /*Metodo que almacena los datos del objeto que es llamado por onSubmit */

  savePaciente(){
    const savePaciente = {
      paciente: this.pacienteForm.get('paciente').value,
      edad: this.pacienteForm.get('edad').value,
      sexo: this.pacienteForm.get('sexo').value,
      email: this.pacienteForm.get('email').value,
      tel: this.pacienteForm.get('tel').value,
      ocupacion: this.pacienteForm.get('ocupacion').value,
      direccion: this.pacienteForm.get('direccion').value,
      motivoconsulta: this.pacienteForm.get('motivoconsulta').value
    }

    return savePaciente;
  }

}
