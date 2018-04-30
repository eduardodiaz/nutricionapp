import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';


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
  sumprot: any = 0;
  sumlip: any = 0;
  sumhco: any = 0;
  sume: any = 0;
  porceprot: any;
  porcelip: any;
  porcehco: any;
  porcee: any;
  restaprot: any = 0;
  restalip: any = 0;
  restahco: any = 0;
  restae: any = 0;

  
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
      porceprot: ['', Validators.required],
      porcelip: ['', Validators.required],
      porcehco: ['', Validators.required],
      porcee: ['', Validators.required],

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
      azucgrasahco: this.azucgrasahco,
      azucgrasae: this.azucgrasae,
      sumprot: this.sumprot,
      sumlip: this.sumlip,
      sumhco: this.sumhco,
      sume: this.sume,
      restaprot: this.restaprot,
      restalip: this.restalip,
      restahco: this.restalip,
      restae: this.restae


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

      this.leguminosas = valor.leguminosas;
      this.calculadoraForm.value.leguminasaspro = this.leguminosas * 8;
      this.calculadoraForm.value.leguminosaslip = this.leguminosas * 1;
      this.calculadoraForm.value.leguminosashco = this.leguminosas * 20;
      this.calculadoraForm.value.leguminosase = this.leguminosas * 120;

      this.alimentosmbg = valor.alimentosmbg;
      this.calculadoraForm.value.alimentosmbgpro = this.alimentosmbg * 7;
      this.calculadoraForm.value.alimentosmgblip = this.alimentosmbg * 1;
      this.calculadoraForm.value.alimentosmgbe = this.alimentosmbg * 40;

      this.alimentosbg = valor.alimentosbg;
      this.calculadoraForm.value.alimentosbgpro = this.alimentosbg * 7;
      this.calculadoraForm.value.alimentosgblip = this.alimentosbg * 3;
      this.calculadoraForm.value.alimentosgbe = this.alimentosbg * 55;

      this.alimentosg = valor.alimentosg;
      this.calculadoraForm.value.alimentosbpro = this.alimentosg * 7;
      this.calculadoraForm.value.alimentosglip = this.alimentosg * 5;
      this.calculadoraForm.value.alimentosge = this.alimentosg * 75;

      this.alimentosag = valor.alimentosag;
      this.calculadoraForm.value.alimentosagpro = this.alimentosag * 7;
      this.calculadoraForm.value.alimentosablip = this.alimentosag * 8;
      this.calculadoraForm.value.alimentosage = this.alimentosag * 100;

      this.lechedes = valor.lechedes;
      this.calculadoraForm.value.lechedespro = this.lechedes * 9;
      this.calculadoraForm.value.lechedeslip = this.lechedes * 2;
      this.calculadoraForm.value.lechedeshco = this.lechedes * 12;
      this.calculadoraForm.value.lechedese = this.lechedes * 95;

      this.lechesemides = valor.lechesemides;
      this.calculadoraForm.value.lechesemidespro = this.lechesemides * 9;
      this.calculadoraForm.value.lechesemideslip = this.lechesemides * 4;
      this.calculadoraForm.value.lechesemideshco = this.lechesemides * 12;
      this.calculadoraForm.value.lechesemidese = this.lechesemides * 110;

      this.lecheent = valor.lecheent;
      this.calculadoraForm.value.lecheentpro = this.lecheent * 9;
      this.calculadoraForm.value.lecheentlip = this.lecheent * 8;
      this.calculadoraForm.value.lecheenhco = this.lecheent * 12;
      this.calculadoraForm.value.lechentse = this.lecheent * 150;

      this.lecheazu = valor.lecheazu;
      this.calculadoraForm.value.lecheazupro = this.lecheazu * 8;
      this.calculadoraForm.value.lecheazulip = this.lecheazu * 5;
      this.calculadoraForm.value.lecheazuhco = this.lecheazu * 30;
      this.calculadoraForm.value.lecheazue = this.lecheazu * 200;

      this.aceygraspro = valor.aceygraspro;
      this.calculadoraForm.value.aceygrasprolip = this.aceygraspro * 5;
      this.calculadoraForm.value.aceygrasproe = this.aceygraspro * 45;

      this.aceygracpro = valor.aceygracpro;
      this.calculadoraForm.value.aceygracpropro = this.aceygracpro * 3;
      this.calculadoraForm.value.aceygracprolip = this.aceygracpro * 5;
      this.calculadoraForm.value.aceygracprohco = this.aceygracpro * 3;
      this.calculadoraForm.value.aceygracproe = this.aceygracpro * 70;

      this.azusgrasa = valor.azusgrasa;
      this.calculadoraForm.value.azusgrasahco = this.azusgrasa * 10;
      this.calculadoraForm.value.azusgrasae = this.azusgrasa * 40;

      this.azucgrasa = valor.azucgrasa;
      this.calculadoraForm.value.azucgrasalip = this.azucgrasa * 5;
      this.calculadoraForm.value.azucgrasahco = this.azucgrasa * 10;
      this.calculadoraForm.value.azucgrasae = this.azucgrasa * 85;

      this.calculadoraForm.value.sumprot = ((this.verduras * 2) + 
      (this.cerealessg * 2) + (this.cerealescg * 2) + (this.leguminosas * 8) + 
      (this.alimentosmbg * 7) + ( this.alimentosbg * 7) + (this.alimentosg * 7) + 
      (this.alimentosag * 7) + (this.lechedes * 9) + (this.lechesemides * 9) + 
      (this.lecheent * 9) +(this.lecheazu * 8) + (this.aceygracpro * 3));

      this.calculadoraForm.value.sumlip = ((this.cerealescg * 5) + (this.leguminosas * 1)+ 
      (this.alimentosmbg * 1) + (this.alimentosbg * 3) + (this.alimentosg * 5) + 
      (this.alimentosag * 8) + (this.lechedes * 2) + (this.lechesemides * 4) + 
      (this.lecheent * 8 )+ (this.lecheazu * 5) + (this.aceygraspro * 5) + 
      (this.aceygracpro * 5) + (this.azucgrasa * 5)); 

      this.calculadoraForm.value.sumhco = ((this.verduras *8) + (this.frutas * 15) + 
      (this.cerealessg * 15) + (this.cerealescg * 15) + (this.leguminosas * 20) + 
      ( this.lechedes * 12) + (this.lechesemides * 12) + (this.lecheent * 12) +
      (this.lecheazu * 30) +  (this.aceygracpro * 3)+ (this.azucgrasa * 10) + (this.azucgrasa * 10));

      this.calculadoraForm.value.sume = ((this.verduras * 25) + (this.frutas * 60) + 
      (this.cerealessg * 70) + (this.cerealescg * 115) + (this.leguminosas * 120) + 
      (this.alimentosmbg * 40) + (this.alimentosbg * 55) + (this.alimentosg * 75) + 
      ( this.alimentosag * 100) + (this.lechedes * 95) + (this.lechesemides * 110) + 
      (this.lecheent * 150) + (this.lecheazu * 200) + ( this.aceygraspro * 45) + 
      (this.aceygracpro * 70 ) + (this.azusgrasa * 40) + ( this.azucgrasa * 85));

      this.porceprot = valor.porceprot;
      this.calculadoraForm.value.restaprot = (this.porceprot - ((this.verduras * 2) + 
      (this.cerealessg * 2) + (this.cerealescg * 2) + (this.leguminosas * 8) + 
      (this.alimentosmbg * 7) + ( this.alimentosbg * 7) + (this.alimentosg * 7) + 
      (this.alimentosag * 7) + (this.lechedes * 9) + (this.lechesemides * 9) + 
      (this.lecheent * 9) +(this.lecheazu * 8) + (this.aceygracpro * 3))).toFixed(2);

      this.porcelip = valor.porcelip;
      this.calculadoraForm.value.restalip = (this.porcelip - ((this.cerealescg * 5) + (this.leguminosas * 1)+ 
      (this.alimentosmbg * 1) + (this.alimentosbg * 3) + (this.alimentosg * 5) + 
      (this.alimentosag * 8) + (this.lechedes * 2) + (this.lechesemides * 4) + 
      (this.lecheent * 8 )+ (this.lecheazu * 5) + (this.aceygraspro * 5) + 
      (this.aceygracpro * 5) + (this.azucgrasa * 5))).toFixed(2);

      this.porcehco = valor.porcehco;
      this.calculadoraForm.value.restahco = (this.porcehco - ((this.verduras *8) + (this.frutas * 15) + 
      (this.cerealessg * 15) + (this.cerealescg * 15) + (this.leguminosas * 20) + 
      ( this.lechedes * 12) + (this.lechesemides * 12) + (this.lecheent * 12) +
      (this.lecheazu * 30) +  (this.aceygracpro * 3)+ (this.azucgrasa * 10) + (this.azucgrasa * 10))).toFixed(2) ;

      this.porcee = valor.porcee;
      this.calculadoraForm.value.restae = (this.porcee - ((this.verduras * 25) + (this.frutas * 60) + 
      (this.cerealessg * 70) + (this.cerealescg * 115) + (this.leguminosas * 120) + 
      (this.alimentosmbg * 40) + (this.alimentosbg * 55) + (this.alimentosg * 75) + 
      ( this.alimentosag * 100) + (this.lechedes * 95) + (this.lechesemides * 110) + 
      (this.lecheent * 150) + (this.lecheazu * 200) + ( this.aceygraspro * 45) + 
      (this.aceygracpro * 70 ) + (this.azusgrasa * 40) + ( this.azucgrasa * 85))).toFixed(2);

      // this.calculadoraForm.value.sumprot = this.verduraspro + this.cerealessgpro +
      // this.cerealescgpro + this.leguminasaspro + this.alimentosmbgpro + this.alimentosbgpro
      //  + this.alimentosbpro + this.alimentosagpro + this.lechedespro + this.lechesemidespro + 
      //  this.lecheentpro + this.lecheazupro + this.aceygracpropro;
    });
    // this.tablaalimentosForm.valueChanges.subscribe(valor => {
    //   this.verduraspor = valor.verduraspor;

    //   this.tablaalimentosForm.value.verduraspro = (this.verduraspor * 2);
  
  }

}
