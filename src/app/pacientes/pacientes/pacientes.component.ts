import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../servicios/pacientes.service';
import { FormControl } from '@angular/forms';


 
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  campoBusqueda: FormControl;
  busqueda: string;
  
  pacientes: any[] = [];
  cargando = false;
  resultados = false;
  noresultados = false;



  constructor(private pacienteService: PacientesService) { 

 

  }

  ngOnInit() {

    this.campoBusqueda = new FormControl();
      this.campoBusqueda.valueChanges
      .subscribe(term => {
        
        this.busqueda = term;
        this.cargando = true;
        if(this.busqueda.length !== 0){
          this.pacienteService.getPacientesSearch(this.busqueda)
            .subscribe(pacientes => {
              this.pacientes = [];
              for(const id$ in pacientes) {
                const p = pacientes[id$];
                p.id$ = id$;
                this.pacientes.push(pacientes[id$]);
              }
              if(this.pacientes.length < 1 && this.busqueda.length <= 1){
                this.noresultados = true;
              }else{
                this.noresultados = false;
              }
            })
            this.cargando = false;
            this.resultados = true;
        } else {
          this.pacientes = [];
          this.cargando = false;
          this.resultados = false;
        }
      });
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
