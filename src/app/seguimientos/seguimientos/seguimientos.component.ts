import { Component, OnInit } from '@angular/core';
import { SeguimientosService } from '../../servicios/seguimientos.service';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {

  seguimientos: any[] = [];
  cargando = true;


  constructor(private seguimientoService: SeguimientosService) { 
    this.seguimientoService.getSeguimientos()
      .subscribe(seguimientos => {
        this.seguimientos = [];
        for(const id$ in seguimientos){
          const p = seguimientos[id$];
          p.id$ = id$;
          this.seguimientos.push(seguimientos[id$]);
        }
        this.cargando = false;

      })
  }

  ngOnInit() {
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
