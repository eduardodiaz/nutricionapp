import { Component, OnInit } from '@angular/core';
import { SeguimientosService } from '../../servicios/seguimientos.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
/*Importaciones para usar los formularios, validaciones y el servicio */



@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {

  campoBusqueda: FormControl; /*Nombre del formGroup del html */
  busqueda: string;  /*Nombre de el objeto donde se registraran los datos */

  seguimientos: any[] = []; /*Arreglo donde se almacenan los datos que se buscan  */
  /*Variables utilizadas para el componente de busqueda */
  cargando = false;
  resultados = false;
  noresultados = false;

/*constructor donde se llama a SeguimientosService */
  constructor(private seguimientoService: SeguimientosService) { 
    
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
          this.seguimientoService.getSeguimientosSearch(this.busqueda)
            .subscribe(seguimientos => {
              this.seguimientos = [];
              for(const id$ in seguimientos) {
                const p = seguimientos[id$];
                p.id$ = id$;
                this.seguimientos.push(seguimientos[id$]);
              }
              if(this.seguimientos.length < 1 && this.busqueda.length <= 1){
                this.noresultados = true;
              }else{
                this.noresultados = false;
              }
            })
            this.cargando = false;
            this.resultados = true;
        } else {
          this.seguimientos = [];
          this.cargando = false;
          this.resultados = false;
        }
      });

  }

//metodo que permite eliminar algun elemento de la lista por id, hacinedo uso de AlimentosService
//manda el resultado de la lista una vez eliminado el elemento.
  eliminarSeguimiento(id$){
    this.seguimientoService.delSeguimiento(id$)
      .subscribe(res => {
        this.seguimientos = [];
        this.seguimientoService.getSeguimientos()
          .subscribe(seguimientos => {
            for(const id$ in seguimientos){
              const p = seguimientos[id$];
              p.id$ = id$;
              this.seguimientos.push(seguimientos[id$]);
            }
          })
      })
  }

}
