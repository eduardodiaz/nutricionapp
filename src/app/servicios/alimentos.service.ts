import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
/**importaciones realizadas para que trabaje el sercivio de los alimentos, peticiones http */

@Injectable()
export class AlimentosService {

  //url de las conexiones de bases de datos a firebase
  alimentosURL = 'https://appnutricion-c6606.firebaseio.com/alimentos.json';
  alimentoURL = 'https://appnutricion-c6606.firebaseio.com/alimentos';

  //se inicializa http
  constructor(private http: Http) { }

  //postea los datos en la base de datos haciendo uso del metodo post
  postAlimentos(alimento: any){
    const newalimento = JSON.stringify(alimento);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.alimentosURL, newalimento, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  //recupera los datos de la base de datos haciendo uso del metodo get
  getAlimentos(){
    return this.http.get(this.alimentosURL)
      .map( res => res.json()
    );
  }

  //recupera datos de la base de datos pero un registro en concreto gracias a su id
  getAlimento(id$: string){
    const url = `${this.alimentoURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
    
  }

  //actualiza los registros de la base de datos gracias a su id
  putAlimento(alimento: any, id$: string){
    const newalimento = JSON.stringify(alimento);
    const headers = new Headers({
      'Content-Type':'application/json'
    });

    const url = `${this.alimentoURL}/${id$}.json`;

    return this.http.put(url, newalimento, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      })
  }
//elimina un registro en especifico de la base de datos haciendo uso de su id
  delAlimento(id$: string){
    const url =  `${this.alimentoURL}/${id$}.json`;
    if(confirm ('de verdad deseas borrar este alimento?')){
      if(confirm('Estos cambios no se podran recuperar, de verdad desea borrarlo')){
        return this.http.delete(url)
          .map(res => res.json());
      }
    }
  }

  //realiza busqueda en la base de datos haciendo uso de algun criterio previamente establecido para que se puedan encontrar coincidencias

  getAlimentosSearch(busqueda: string){
    const url = `${this.alimentosURL}?orderBy="alimento"&startAt="${ busqueda }"&endAt="${ busqueda }\uf8ff"`
    return this.http.get(url)
      .map(res => res.json());
  }

}
