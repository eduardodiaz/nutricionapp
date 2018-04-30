import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../servicios/pacientes.service';
import { FormControl } from '@angular/forms';
/*Impotaciones para usar los formularios y el servicio */


 
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  campoBusqueda: FormControl; /*Nombre del formGroup del html */
  busqueda: string; /*Nombre de el objeto donde se registraran los datos */
  
  pacientes: any[] = []; /*Arreglo donde se almacenan los datos que se buscan  */
  cargando = false;   /*Variables utilizadas para el componente de busqueda */
  resultados = false;
  noresultados = false;


/*constructor donde se llama a PacientesService */
  constructor(private pacienteService: PacientesService) { 

 

  }

/*Metodo que se ejecuta cuando se realiza una busqueda, se subscribe a los cambios que pudieran
existir, se verifica que en en la busqueda se alla escrito algo, y muestra los resultados en 
pantalla en caso de que hayan existido resultados, en caso contrario, aparece que no se han
encontrado coincidencias de la busqueda */
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


  //metodo que permite eliminar algun elemento de la lista por id, hacinedo uso de AlimentosService
//manda el resultado de la lista una vez eliminado el elemento.
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
