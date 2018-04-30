import { Component, OnInit } from '@angular/core';
import { AntecedentesService } from '../../servicios/antecedentes.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
/*Impotaciones para usar los formularios, validaciones y el servicio */



@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.css']
})
export class AntecedentesComponent implements OnInit {

  campoBusqueda: FormControl; /*Impotaciones para usar los formularios, validaciones y el servicio */
  busqueda: string; /*Nombre de el objeto donde se registraran los datos */

  antecedentes: any[] = []; /*Arreglo donde se almacenan los datos que se buscan  */
  cargando = false; /*Variables utilizadas para el componente de busqueda */
  resultados = false;
  noresultados = false;

  /*constructor donde se llama a AntecedentesService */
  constructor(private antecedenteService: AntecedentesService) { 
    
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
          this.antecedenteService.getAntecedentesSearch(this.busqueda)
            .subscribe(antecedentes => {
              this.antecedentes = [];
              for(const id$ in antecedentes) {
                const p = antecedentes[id$];
                p.id$ = id$;
                this.antecedentes.push(antecedentes[id$]);
              }
              if(this.antecedentes.length < 1 && this.busqueda.length <= 1){
                this.noresultados = true;
              }else{
                this.noresultados = false;
              }
            })
            this.cargando = false;
            this.resultados = true;
        } else {
          this.antecedentes = [];
          this.cargando = false;
          this.resultados = false;
        }
      });
  }
    //metodo que permite eliminar algun elemento de la lista por id, hacinedo uso de AlimentosService
//manda el resultado de la lista una vez eliminado el elemento.

  eliminarAntecedente(id$){
    this.antecedenteService.delAntecedente(id$)
      .subscribe(res => {
        this.antecedentes = [];
        this.antecedenteService.getAntecedentes()
          .subscribe(antecedentes => {
            for(const id$ in antecedentes){
              const p = antecedentes[id$];
              p.id$ = id$;
              this.antecedentes.push(antecedentes[id$]);
            }
          })
      })
  }

}
