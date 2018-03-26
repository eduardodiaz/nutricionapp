import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacientesService } from '../../servicios/pacientes.service';

@Component({
  selector: 'app-addpacientes',
  templateUrl: './addpacientes.component.html',
  styleUrls: ['./addpacientes.component.css']
})
export class AddpacientesComponent implements OnInit {

  pacienteForm: FormGroup;
  paciente: any;

  constructor(private pf: FormBuilder,
              private pacienteService: PacientesService) { }

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

  onSubmit(){
    this.paciente = this.savePaciente();
    this.pacienteService.postPaciente(this.paciente)
      .subscribe(newpaciente => {

      })
      this.pacienteForm.reset();
  }

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
