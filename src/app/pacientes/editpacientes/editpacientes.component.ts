import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PacientesService } from '../../servicios/pacientes.service';

@Component({
  selector: 'app-editpacientes',
  templateUrl: './editpacientes.component.html',
  styleUrls: ['./editpacientes.component.css']
})
export class EditpacientesComponent implements OnInit {

  pacienteForm: FormGroup;
  paciente: any;
  id: string;

  constructor(private pf: FormBuilder,
              private pacienteService: PacientesService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { 
                this.activatedRouter.params
                  .subscribe(parametros => {
                    this.id = parametros['id'];
                    this.pacienteService.getPaciente(this.id)
                      .subscribe(paciente => this.paciente = paciente)
                  });
              }

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
    this.pacienteService.putPaciente(this.paciente, this.id)
      .subscribe(newpaciente => {
        this.router.navigate(['/pacientes'])

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
