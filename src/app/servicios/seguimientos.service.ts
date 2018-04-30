import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
/**importaciones realizadas para que trabaje el sercivio de las autentificaciones, peticiones http */


@Injectable()
export class SeguimientosService {

  //url de las conexiones de bases de datos a firebase

  seguimientosURL = 'https://appnutricion-c6606.firebaseio.com/seguimientos.json';
  seguimientoURL = 'https://appnutricion-c6606.firebaseio.com/seguimientos';
    //se inicializa http

  constructor(private http: Http) { }
  //postea los datos en la base de datos haciendo uso del metodo post

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
  //recupera los datos de la base de datos haciendo uso del metodo get

  getSeguimientos(){
    return this.http.get(this.seguimientosURL)
      .map(
        res => res.json()
      );
  }
  //recupera datos de la base de datos pero un registro en concreto gracias a su id

  getSeguimiento(id$: string){
    const url = `${this.seguimientoURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
  }
  //actualiza los registros de la base de datos gracias a su id

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
//elimina un registro en especifico de la base de datos haciendo uso de su id

  delSeguimiento(id$: string){
    const url = `${this.seguimientoURL}/${id$}.json`;
    if(confirm('de verdad quieres borrarlo?')){
      if(confirm('Estos cambios no se podran recuperar, de verdad deseas borrarlo?')){
        return this.http.delete(url)
          .map(res => res.json());
    }
  }
}  

//realiza busqueda en la base de datos haciendo uso de algun criterio previamente establecido para que se puedan encontrar coincidencias

getSeguimientosSearch(busqueda: string){
  //indica cual sera el campo a buscar
  const url = (`${this.seguimientosURL }?orderBy="fecha"&startAt="${ busqueda }"&endAt="${busqueda}\uf8ff"`)
  return this.http.get(url)
    .map( res=> res.json());
}

}
