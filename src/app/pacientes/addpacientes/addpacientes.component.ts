import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacientesService } from '../../servicios/pacientes.service';
/*Impotaciones para usar los formulariosy el servicio */

@Component({
  selector: 'app-addpacientes',
  templateUrl: './addpacientes.component.html',
  styleUrls: ['./addpacientes.component.css']
})
export class AddpacientesComponent implements OnInit {

  pacienteForm: FormGroup; /*Nombre del formGroup del html */
  paciente: any; /*Nombre de el objeto donde se registraran los datos */

  /*constructor donde se llama a PacientesService */

  constructor(private pf: FormBuilder,
              private pacienteService: PacientesService) { }

  //metodo donde se validan los datos del objeto
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

  //metodo onSubmit que se desencadena cuando se llenan los datos del registro, guarda los datos del paciente en la base de datos usando PacientesService

  onSubmit(){
    this.paciente = this.savePaciente();
    this.pacienteService.postPaciente(this.paciente)
      .subscribe(newpaciente => {

      })
      this.pacienteForm.reset();
  }

  //Se guardan los datos del obejto, trayendolos del formulario segun su nombre

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
