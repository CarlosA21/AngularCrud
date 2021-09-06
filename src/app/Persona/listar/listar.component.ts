import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[] | undefined


  constructor(private service:ServiceService, private router:Router) {

   }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data =>{
      this.personas=data;
    })
  }
  /*Editar(a:Persona):void{
    
    localStorage.setItem("id",a.id.toString());
    this.router.navigate(["edit"]);
  }*/
}
