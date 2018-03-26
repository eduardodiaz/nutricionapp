import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlimentosService } from '../../servicios/alimentos.service';


@Component({
  selector: 'app-addalimentos',
  templateUrl: './addalimentos.component.html',
  styleUrls: ['./addalimentos.component.css']
})
export class AddalimentosComponent implements OnInit {

  alimentoForm: FormGroup;
  alimento: any;

  constructor(private pf: FormBuilder,
              private alimentoService: AlimentosService) { }

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
    this.alimentoService.postAlimentos(this.alimento)
      .subscribe(newalimento => {

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
