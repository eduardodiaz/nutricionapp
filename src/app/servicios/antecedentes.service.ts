import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class AntecedentesService {

  antecedentesURL = 'https://appnutricion-c6606.firebaseio.com/antecedentes.json';
  antecedenteURL = 'https://appnutricion-c6606.firebaseio.com/antecedentes';

  constructor(private http: Http) { }

  postAntecedentes(antecedente: any){
    const newantecedente = JSON.stringify(antecedente);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.antecedentesURL, newantecedente, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  getAntecedentes(){
    return this.http.get(this.antecedentesURL)
      .map(
        res => res.json()
      );
  }

  getAntecedente(id$: string){
    const url = `${this.antecedenteURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
  }

  putAntecedente(antecedente: any, id$: string){
    const newantecedente = JSON.stringify(antecedente);
    const headers = new Headers({
      'Content-Type':'application/json'
    });

    const url = `${this.antecedenteURL}/${id$}.json`;

    return this.http.put(url, newantecedente, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  delAntecedente(id$: string){
    const url = `${this.antecedenteURL}/${id$}.json`;
    if(confirm('de verdad quieres borrarlo?')){
      if(confirm('Estos cambios no se podran recuperar, de verdad deseas borrarlo?')){
        return this.http.delete(url)
          .map(res => res.json());
    }
  }
}

  getAntecedentesSearch(busqueda: string){
    //indica cual sera el campo a buscar
    const url = (`${this.antecedentesURL }?orderBy="nombre"&startAt="${ busqueda }"&endAt="${busqueda}\uf8ff"`)
    return this.http.get(url)
      .map( res=> res.json());
  }
}
