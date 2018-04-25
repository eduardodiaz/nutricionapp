import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class SeguimientosService {


  seguimientosURL = 'https://appnutricion-c6606.firebaseio.com/seguimientos.json';
  seguimientoURL = 'https://appnutricion-c6606.firebaseio.com/seguimientos';
  
  constructor(private http: Http) { }

  postSeguimientos(seguimiento: any){
    const newseguimiento = JSON.stringify(seguimiento);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.seguimientosURL, newseguimiento, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  getSeguimientos(){
    return this.http.get(this.seguimientosURL)
      .map(
        res => res.json()
      );
  }

  getSeguimiento(id$: string){
    const url = `${this.seguimientoURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
  }

  putSeguimiento(seguimiento: any, id$: string){
    const newseguimiento = JSON.stringify(seguimiento);
    const headers = new Headers({
      'Content-Type':'application/json'
    });

    const url = `${this.seguimientoURL}/${id$}.json`;

    return this.http.put(url, newseguimiento, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  delSeguimiento(id$: string){
    const url = `${this.seguimientoURL}/${id$}.json`;
    if(confirm('de verdad quieres borrarlo?')){
      if(confirm('Estos cambios no se podran recuperar, de verdad deseas borrarlo?')){
        return this.http.delete(url)
          .map(res => res.json());
    }
  }
}
getSeguimientosSearch(busqueda: string){
  //indica cual sera el campo a buscar
  const url = (`${this.seguimientosURL }?orderBy="fecha"&startAt="${ busqueda }"&endAt="${busqueda}\uf8ff"`)
  return this.http.get(url)
    .map( res=> res.json());
}

}
