import { Component, OnInit } from '@angular/core';
import { AlimentosService } from '../../servicios/alimentos.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
/*Impotaciones para usar los formularios, validaciones y el servicio */



@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {

  campoBusqueda: FormControl; /*Nombre del formGroup del html */
  busqueda: string; /*Nombre de el objeto donde se registraran los datos */

  alimentos: any[] = [];  /*Arreglo donde se almacenan los datos que se buscan  */
  cargando = false;  /*Variables utilizadas para el componente de busqueda */
  resultados = false;
  noresultados = false;
  

  /*constructor donde se llama a AlimentosService */

  constructor(private alimentoService: AlimentosService) {

   
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
          this.alimentoService.getAlimentosSearch(this.busqueda)
            .subscribe(alimentos => {
              this.alimentos = [];
              for(const id$ in alimentos){
                const p = alimentos[id$];
                p.id$ = id$;
                this.alimentos.push(alimentos[id$]);
              } 
              if (this.alimentos.length < 1 && 
                  this.busqueda.length <= 1){
                    this.noresultados = true;
                  } else {
                    this.noresultados = false;
                  }
            })
            this.cargando = false;
            this.resultados = true;
        } else {
          this.alimentos = [];
          this.cargando = false;
          this.resultados = false;
        }
      });
    
  }
//metodo que permite eliminar algun elemento de la lista por id, hacinedo uso de AlimentosService
//manda el resultado de la lista una vez eliminado el elemento.

  eliminarAlimento(id$){
    this.alimentoService.delAlimento(id$)
      .subscribe(res => {
        this.alimentos = [];
        this.alimentoService.getAlimentos()
          .subscribe(alimentos => {
            for(const id$ in alimentos){
              const p = alimentos[id$];
              p.id$ = id$;
              this.alimentos.push(alimentos[id$]);
            }
          })
      })
  }

}
