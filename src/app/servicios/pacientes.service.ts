import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
/**importaciones realizadas para que trabaje el sercivio de los pacientes, peticiones http */

@Injectable()
export class PacientesService {
  //url de las conexiones de bases de datos a firebase
  pacientesURL = 'https://appnutricion-c6606.firebaseio.com/pacientes.json';
  pacienteURL = 'https://appnutricion-c6606.firebaseio.com/pacientes';

  //se inicializa http

  constructor(private http: Http) { }

    //postea los datos en la base de datos haciendo uso del metodo post
postPaciente(paciente: any){
    const newpaciente = JSON.stringify(paciente);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.pacientesURL, newpaciente, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

   //recupera los datos de la base de datos haciendo uso del metodo get
   getPacientes(){
    return this.http.get(this.pacientesURL)
      .map(
        res => res.json()
      );
  }
  //recupera datos de la base de datos pero un registro en concreto gracias a su id

  getPaciente(id$: string){
    const url = `${this.pacienteURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
  }
  //actualiza los registros de la base de datos gracias a su id

  putPaciente(paciente: any, id$: string){
    const newpaciente = JSON.stringify(paciente);
    const headers = new Headers({
      'Content-Type':'application/json'
    });

    const url = `${this.pacienteURL}/${id$}.json`;

    return this.http.put(url, newpaciente, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }
//elimina un registro en especifico de la base de datos haciendo uso de su id

  delPaciente(id$: string){
    const url = `${this.pacienteURL}/${id$}.json`;
    if(confirm('de verdad quieres borrarlo?')){
      if(confirm('Estos cambios no se podran recuperar, de verdad deseas borrarlo?')){
        return this.http.delete(url)
          .map(res => res.json());
    }
  }
}
  //realiza busqueda en la base de datos haciendo uso de algun criterio previamente establecido para que se puedan encontrar coincidencias

  getPacientesSearch(busqueda: string){
    const url =  (`${this.pacientesURL }?orderBy="paciente"&startAt="${ busqueda }"&endAt="${busqueda}\uf8ff"`)
    return this.http.get(url)
      .map(res=> res.json());
  }


}
