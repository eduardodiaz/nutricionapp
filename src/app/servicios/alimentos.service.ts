import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AlimentosService {

  alimentosURL = 'https://appnutricion-c6606.firebaseio.com/alimentos.json';
  alimentoURL = 'https://appnutricion-c6606.firebaseio.com/alimentos';

  constructor(private http: Http) { }

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

  getAlimentos(){
    return this.http.get(this.alimentosURL)
      .map( res => res.json()
    );
  }

  getAlimento(id$: string){
    const url = `${this.alimentoURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
    
  }

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

  delAlimento(id$: string){
    const url =  `${this.alimentoURL}/${id$}.json`;
    if(confirm ('de verdad deseas borrar este alimento?')){
      if(confirm('Estos cambios no se podran recuperar, de verdad desea borrarlo')){
        return this.http.delete(url)
          .map(res => res.json());
      }
    }
  }


}
