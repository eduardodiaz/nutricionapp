import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlimentosService } from '../../servicios/alimentos.service';


@Component({
  selector: 'app-editalimentos',
  templateUrl: './editalimentos.component.html',
  styleUrls: ['./editalimentos.component.css']
})
export class EditalimentosComponent implements OnInit {

  alimentoForm: FormGroup;
  alimento: any;
  id: string;

  constructor(private pf: FormBuilder,
              private alimentoService: AlimentosService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                this.activatedRouter.params
                  .subscribe(parametros => {
                    this.id = parametros['id'];
                    this.alimentoService.getAlimento(this.id)
                      .subscribe(alimento => this.alimento = alimento)
                  });
               }

  ngOnInit() {

    this.alimentoForm = this.pf.group({
      alimento: ['', Validators.required ],
      medida: ['', Validators.required ],
      pesobruto: ['', Validators.required ],
      tipo: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.alimento = this.saveAlimento();
    this.alimentoService.putAlimento(this.alimento, this.id)
      .subscribe(newalimento => {
        this.router.navigate(['/alimentos'])
      })
      this.alimentoForm.reset();
  }

  saveAlimento(){
    const saveAlimento = {
      alimento: this.alimentoForm.get('alimento').value,
      medida: this.alimentoForm.get('medida').value,
      pesobruto: this.alimentoForm.get('pesobruto').value,
      tipo: this.alimentoForm.get('tipo').value
    }

    return saveAlimento;
  }
}
