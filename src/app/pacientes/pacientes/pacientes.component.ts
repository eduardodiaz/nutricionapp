import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../servicios/pacientes.service';


 
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: any[] = [];
  cargando = true;

  constructor(private pacienteService: PacientesService) { 

    this.pacienteService.getPacientes()
      .subscribe(pacientes => {
        this.pacientes = [];
        for(const id$ in pacientes){
          const p = pacientes[id$];
          p.id$ = id$;
          this.pacientes.push(pacientes[id$]);
        }
        this.cargando = false;
      })
    

  }

  ngOnInit() {
  }

  eliminarPaciente(id$){
    this.pacienteService.delPaciente(id$)
      .subscribe(res => {
        this.pacientes = [];
        this.pacienteService.getPacientes()
          .subscribe(pacientes => {
            for(const id$ in pacientes){
              const p = pacientes[id$];
              p.id$ = id$;
              this.pacientes.push(pacientes[id$]);
            }
          })
      })
  
}
}
