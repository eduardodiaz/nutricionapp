import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PacientesService {

  pacientesURL = 'https://appnutricion-c6606.firebaseio.com/pacientes.json';
  pacienteURL = 'https://appnutricion-c6606.firebaseio.com/pacientes';


  constructor(private http: Http) { }

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

  getPacientes(){
    return this.http.get(this.pacientesURL)
      .map(
        res => res.json()
      );
  }

  getPaciente(id$: string){
    const url = `${this.pacienteURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());
  }

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

  delPaciente(id$: string){
    const url = `${this.pacienteURL}/${id$}.json`;
    if(confirm('de verdad quieres borrarlo?')){
      if(confirm('Estos cambios no se podran recuperar, de verdad deseas borrarlo?')){
        return this.http.delete(url)
          .map(res => res.json());
    }
  }
}


}
