import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AntecedentesService } from '../../servicios/antecedentes.service';


@Component({
  selector: 'app-addantecedentes',
  templateUrl: './addantecedentes.component.html',
  styleUrls: ['./addantecedentes.component.css']
})
export class AddantecedentesComponent implements OnInit {

  antecedenteForm: FormGroup;
  antecedente: any;

  constructor(private pf: FormBuilder,
              private antecedenteService: AntecedentesService) { }

  ngOnInit() {
    this.antecedenteForm = this.pf.group({
      nombre: ['', Validators.required ],
      enfdiag: ['', Validators.required ],
      sintomas: ['', Validators.required ],
      medicamentos: ['', Validators.required ],
      famenf: ['', Validators.required ],
      desayuno: ['', Validators.required ],
      comida: ['', Validators.required ],
      cena: ['', Validators.required ],
      entrecomidas: ['', Validators.required ],
      hrdesayuno: ['', Validators.required ],
      hrcomida: ['', Validators.required ],
      hrcena: ['', Validators.required ],
      hrentrecomidas: ['', Validators.required ]
    });
  }

  onSubmit(){
    this.antecedente = this.saveAntecedente();
    this.antecedenteService.postAntecedentes(this.antecedente)
      .subscribe(newantecedente => {

      })
      this.antecedenteForm.reset();
  }

  saveAntecedente(){
    const saveAntecedente = {
      nombre: this.antecedenteForm.get('nombre').value,
      enfdiag: this.antecedenteForm.get('enfdiag').value,
      sintomas: this.antecedenteForm.get('sintomas').value,
      medicamentos: this.antecedenteForm.get('medicamentos').value,
      famenf: this.antecedenteForm.get('famenf').value,
      desayuno: this.antecedenteForm.get('desayuno').value,
      comida: this.antecedenteForm.get('comida').value,
      cena: this.antecedenteForm.get('cena').value,
      entrecomidas: this.antecedenteForm.get('entrecomidas').value,
      hrdesayuno:  this.antecedenteForm.get('hrdesayuno').value,
      hrcomida:  this.antecedenteForm.get('hrcomida').value,
      hrcena: this.antecedenteForm.get('hrcena').value,
      hrentrecomidas: this.antecedenteForm.get('hrentrecomidas').value
    
      
    }

    return saveAntecedente;
  }

}
