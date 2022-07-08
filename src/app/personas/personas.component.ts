import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  constructor(private personasService: PersonasService,
              private router:Router){}
  ngOnInit(): void { //aqui es k mejor lugar para inicializar personas
    this.personas = this.personasService.personas; //pasamos por referencia la variable personas inicializada en el servicio 
  }
  agregar(){
    this.router.navigate(['personas/agregar'])
  }
}
