import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient){}

    //guardar personas
    guardarPersonas(personas:Persona[]){
        this.httpClient.put('https://listado-personas-local-ref-app-default-rtdb.firebaseio.com/datos.js', personas)
        .subscribe(
            response => console.log("resultado de guardar las personas: "+ response),
            error => console.log("error al guardar personas: "+ error)
        );
    }
}
