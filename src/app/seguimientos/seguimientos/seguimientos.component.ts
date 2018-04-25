import { Component, OnInit } from '@angular/core';
import { SeguimientosService } from '../../servicios/seguimientos.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {

  campoBusqueda: FormControl;
  busqueda: string;

  seguimientos: any[] = [];
  cargando = false;
  resultados = false;
  noresultados = false;


  constructor(private seguimientoService: SeguimientosService) { 
    
  }

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
