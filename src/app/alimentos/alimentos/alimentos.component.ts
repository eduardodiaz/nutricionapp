import { Component, OnInit } from '@angular/core';
import { AlimentosService } from '../../servicios/alimentos.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';



@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {

  campoBusqueda: FormControl;
  busqueda: string;

  alimentos: any[] = [];
  cargando = true;
  resultados = false;
  noresulados = false;
  
  constructor(private alimentoService: AlimentosService) {

    this.alimentoService.getAlimentos()
      .subscribe(alimentos => {
        this.alimentos = [];
        for(const id$ in alimentos){
          const p = alimentos[id$];
          p.id$ = id$;
          this.alimentos.push(alimentos[id$]);
        }
        this.cargando = false;

      })
    }
   

  ngOnInit() {
/*
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
                  this.busqueda.length >= 1){
                    this.noresulados = true;
                  } else {
                    this.noresulados = false;
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
      */
  }

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
