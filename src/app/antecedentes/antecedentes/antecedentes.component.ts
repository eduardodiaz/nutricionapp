import { Component, OnInit } from '@angular/core';
import { AntecedentesService } from '../../servicios/antecedentes.service';



@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.css']
})
export class AntecedentesComponent implements OnInit {

  antecedentes: any[] = [];
  cargando = true;

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
