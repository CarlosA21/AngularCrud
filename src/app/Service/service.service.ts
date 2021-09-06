import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/crud/personas'


  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>("http://localhost:8080/crud/addperson",persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>("http://localhost:8080/crud/personas/"+ id )
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>("http://localhost:8080/crud/update/"+persona.id,persona);
  }

}
