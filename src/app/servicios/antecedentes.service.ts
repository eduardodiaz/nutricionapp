import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
/**importaciones realizadas para que trabaje el sercivio de los antecedentes, peticiones http */


@Injectable()
export class AntecedentesService {
  //url de las conexiones de bases de datos a firebase

  antecedentesURL = 'https://appnutricion-c6606.firebaseio.com/antecedentes.json';
  antecedenteURL = 'https://appnutricion-c6606.firebaseio.com/antecedentes';
  
  
  //se inicializa http
  constructor(private http: Http) { }

    //postea los datos en la base de datos haciendo uso del metodo post

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

    //recupera los datos de la base de datos haciendo uso del metodo get

  getAntecedentes(){
    return this.http.get(this.antecedentesURL)
      .map(
        res => res.json()
      );
  }

    //recupera datos de la base de datos pero un registro en concreto gracias a su id

  getAntecedente(id$: string){
    const url = `${this.antecedenteURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
  }


    //actualiza los registros de la base de datos gracias a su id

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


  //elimina un registro en especifico de la base de datos haciendo uso de su id

  delAntecedente(id$: string){
    const url = `${this.antecedenteURL}/${id$}.json`;
    if(confirm('de verdad quieres borrarlo?')){
      if(confirm('Estos cambios no se podran recuperar, de verdad deseas borrarlo?')){
        return this.http.delete(url)
          .map(res => res.json());
    }
  }
}


  //realiza busqueda en la base de datos haciendo uso de algun criterio previamente establecido para que se puedan encontrar coincidencias

  getAntecedentesSearch(busqueda: string){
    //indica cual sera el campo a buscar
    const url = (`${this.antecedentesURL }?orderBy="nombre"&startAt="${ busqueda }"&endAt="${busqueda}\uf8ff"`)
    return this.http.get(url)
      .map( res=> res.json());
  }
}
