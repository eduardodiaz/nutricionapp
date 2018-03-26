import { Component, OnInit } from '@angular/core';
import { AlimentosService } from '../../servicios/alimentos.service';


@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {

  alimentos: any[] = [];
  cargando = true;
  
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
