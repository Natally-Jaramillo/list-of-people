import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona('Tael', 'monda'), 
        new Persona('Mayu', 'Rozas'),
        new Persona('glish', 'peruano')];
    saludar = new EventEmitter<number>();    
    constructor(private loggingService: LoggingService,
                private dataService: DataServices){}
    
    agregarPersona(persona: Persona){ 
    this.loggingService.eviaMensajeAconsola("agregamos persona: "+ persona.name);
    this.personas.push(persona); 
    this.dataService.guardarPersonas(this.personas); 
    } 
    encontrarPersona(index:number){
        let persona: Persona = this.personas[index];
        return persona;
    }
    modificarPersona(index:number, persona:Persona){
        //let persona1 = this.personas[index];
       // persona1.name = persona.name;
        //persona1.lastName = persona.lastName;
        this.personas[index] = persona;
    }
    eliminarPersona(index:number){
        this.personas.splice(index,1);
    }

}