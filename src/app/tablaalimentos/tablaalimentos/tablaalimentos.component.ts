import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tablaalimentos',
  templateUrl: './tablaalimentos.component.html',
  styleUrls: ['./tablaalimentos.component.css']
})
export class TablaalimentosComponent implements OnInit {

  calculadoraForm: FormGroup;
  verduras: any;
  verduraspro: any = 0;
  verdurashco: any = 0;
  verdurase: any = 0;
  frutas: any;
  frutashco: any = 0;
  frutase: any = 0;
  cerealessg: any;
  cerealessgpro: any = 0;
  cerealessghco: any = 0;
  cerealessge: any  = 0;
  cerealescg: any;
  cerealescgpro: any = 0;
  cerealescglip: any = 0;
  cerealescghco: any = 0;
  cerealescge: any = 0;
  leguminosas: any;
  leguminasaspro: any = 0;
  leguminosaslip: any = 0;
  leguminosashco: any = 0;
  leguminosase: any = 0;
  alimentosmbg: any;
  alimentosmbgpro: any = 0;
  alimentosmgblip: any = 0;
  alimentosmgbe: any = 0;
  alimentosbg: any;
  alimentosbgpro: any = 0;
  alimentosgblip: any = 0;
  alimentosgbe: any = 0;
  alimentosg: any;
  alimentosbpro: any = 0;
  alimentosglip: any = 0;
  alimentosge: any = 0;
  alimentosag: any;
  alimentosagpro: any = 0;
  alimentosablip: any = 0;
  alimentosage: any = 0;
  lechedes: any;
  lechedespro: any = 0;
  lechedeslip: any = 0;
  lechedeshco: any = 0;
  lechedese: any = 0;
  lechesemides: any;
  lechesemidespro: any = 0;
  lechesemideslip: any = 0;
  lechesemideshco: any = 0;
  lechesemidese: any = 0;
  lecheent: any;
  lecheentpro: any = 0;
  lecheentlip: any = 0;
  lecheenhco: any = 0;
  lechentse: any = 0;
  lecheazu: any;
  lecheazupro: any = 0;
  lecheazulip: any = 0;
  lecheazuhco: any = 0;
  lecheazue: any = 0;
  aceygraspro: any;
  aceygrasprolip: any = 0;
  aceygrasproe: any = 0;
  aceygracpro: any;
  aceygracpropro: any = 0;
  aceygracprolip: any = 0;
  aceygracprohco: any = 0;
  aceygracproe: any = 0;
  azusgrasa: any;
  azusgrasahco: any = 0;
  azusgrasae: any = 0;
  azucgrasa: any;
  azucgrasalip: any = 0;
  azucgrasahco: any = 0;
  azucgrasae: any = 0;

  
  constructor(private pf: FormBuilder) { }

  ngOnInit() {
    this.calculadoraForm = this.pf.group({
      verduras: ['', Validators.required],
      frutas: ['', Validators.required],
      cerealessg: ['', Validators.required],
      cerealescg: ['', Validators.required],
      leguminosas: ['', Validators.required],
      alimentosmbg: ['', Validators.required],
      alimentosbg: ['', Validators.required],
      alimentosg: ['', Validators.required],
      alimentosag: ['', Validators.required],
      lechedes: ['', Validators.required],
      lechesemides: ['', Validators.required],
      lecheent: ['', Validators.required],
      lecheazu: ['', Validators.required],
      aceygraspro: ['', Validators.required],
      aceygracpro: ['', Validators.required],
      azusgrasa: ['', Validators.required],
      azucgrasa: ['', Validators.required],

      verduraspro: this.verduraspro,
      verdurashco: this.verdurashco,
      verdurase: this.verdurase,

      frutashco: this.frutashco,
      frutase: this.frutase,

      cerealessgpro: this.cerealescgpro,
      cerealessghco: this.cerealescghco,
      cerealessge: this.cerealessge,
      cerealescgpro: this.cerealescgpro,
      cerealescglip: this.cerealescglip,
      cerealescghco: this.cerealescghco,
      cerealescge: this.cerealescge,
      leguminasaspro: this.leguminasaspro,
      leguminosaslip: this.leguminosaslip,
      leguminosashco: this.leguminosashco,
      leguminosase: this.leguminosase,
      alimentosmbgpro: this.alimentosmbgpro,
      alimentosmgblip: this.alimentosmgblip,
      alimentosmgbe: this.alimentosmgbe,
      alimentosbgpro: this.alimentosbgpro,
      alimentosgblip: this.alimentosgblip,
      alimentosgbe: this.alimentosgbe,
      alimentosbpro: this.alimentosbpro,
      alimentosglip: this.alimentosglip,
      alimentosge: this.alimentosge,
      alimentosagpro: this.alimentosagpro,
      alimentosablip: this.alimentosablip,
      alimentosage: this.alimentosage,
      lechedespro: this.lechedespro,
      lechedeslip:this.lechedeslip,
      lechedeshco: this.lechedeshco,
      lechedese: this.lechedese,
      lechesemidespro: this.lechesemidespro,
      lechesemideslip: this.lechesemideslip, 
      lechesemideshco: this.lechesemideshco, 
      lechesemidese: this.lechesemidese, 
      lecheentpro: this.lecheentpro,
      lecheentlip: this.lecheentlip, 
      lecheenhco: this.lecheenhco,
      lechentse: this.lechentse, 
      lecheazupro: this.lecheazupro, 
      lecheazulip: this.lecheazulip, 
      lecheazuhco: this.lecheazuhco, 
      lecheazue: this.lecheazue,
      aceygrasprolip: this.aceygrasprolip, 
      aceygrasproe: this.aceygrasproe, 
      aceygracpropro: this.aceygracpropro, 
      aceygracprolip: this.aceygracprolip, 
      aceygracprohco: this.aceygracprohco, 
      aceygracproe: this.aceygracproe, 
      azusgrasahco: this.azusgrasahco, 
      azusgrasae: this.azusgrasae, 
      azucgrasalip: this.azucgrasalip,
      azucgrasahco: this.azucgrasahco


    });

    this.onChanges();

  }

  onChanges(): void {
    this.calculadoraForm.valueChanges.subscribe(valor => {
      this.verduras = valor.verduras;
      this.calculadoraForm.value.verduraspro = this.verduras * 2;
      this.calculadoraForm.value.verdurashco = this.verduras *8;
      this.calculadoraForm.value.verdurase = this.verduras * 25;
      
      this.frutas = valor.frutas;
      this.calculadoraForm.value.frutashco = this.frutas * 15;
      this.calculadoraForm.value.frutase = this.frutas * 60;

      this.cerealessg = valor.cerealessg;
      this.calculadoraForm.value.cerealessgpro = this.cerealessg * 2;
      this.calculadoraForm.value.cerealessghco = this.cerealessg * 15;
      this.calculadoraForm.value.cerealessge = this.cerealessg * 70;

      this.cerealescg = valor.cerealescg;
      this.calculadoraForm.value.cerealescgpro = this.cerealescg * 2;
      this.calculadoraForm.value.cerealescglip = this.cerealescg * 5;
      this.calculadoraForm.value.cerealescghco = this.cerealescg * 15;
      this.calculadoraForm.value.cerealescge = this.cerealescg * 115;

    });
    // this.tablaalimentosForm.valueChanges.subscribe(valor => {
    //   this.verduraspor = valor.verduraspor;

    //   this.tablaalimentosForm.value.verduraspro = (this.verduraspor * 2);
  
  }

}
