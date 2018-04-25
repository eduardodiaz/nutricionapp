import { Component, OnInit } from '@angular/core';
import { AntecedentesService } from '../../servicios/antecedentes.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.css']
})
export class AntecedentesComponent implements OnInit {

  campoBusqueda: FormControl;
  busqueda: string;

  antecedentes: any[] = [];
  cargando = false;
  resultados = false;
  noresultados = false;

  constructor(private antecedenteService: AntecedentesService) { 
    this.antecedenteService.getAntecedentes()
      .subscribe(antecedentes => {
        this.antecedentes = [];
        for(const id$ in antecedentes){
          const p = antecedentes[id$];
          p.id$ = id$;
          this.antecedentes.push(antecedentes[id$]);
        }
        this.cargando = false;

      })
  }

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
