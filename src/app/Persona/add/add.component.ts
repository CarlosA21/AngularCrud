import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  constructor(private router:Router, private service:ServiceService) { }
  persona:Persona = new Persona();
  ngOnInit(): void {
  }
  Guardar(persona:Persona){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Persona agregada con exito"+this.persona.name+" "+this.persona.apellidos);
      this.router.navigate(["listar"]);
    });
  }
}
