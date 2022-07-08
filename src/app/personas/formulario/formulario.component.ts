import { Component, ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent  {
//@Output() PersonaCreada = new EventEmitter<Persona>(); //aqui creamos el output que se va a emitir al componente padre
  nombreInput: string = '';
  apellidoInput: string = '';
  index : number;
  modoEdicion: number;

constructor(
            private personasService:PersonasService,
            private router:Router,
            private route: ActivatedRoute){ //asi se agrega el servicio
            this.personasService.saludar.subscribe(
              (indice: number) => alert("el indice es: "+ indice )
            );
}
    ngOnInit(){
      this.index = this.route.snapshot.params['id'];
      this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
      if(this.modoEdicion != null && this.modoEdicion === 1 ){
        let persona: Persona = this.personasService.encontrarPersona(this.index);
        this.nombreInput = persona.name;
        this.apellidoInput = persona.lastName;
      }
    }
    onGuardarPersona(){
      let persona1 = new Persona(this.nombreInput,this.apellidoInput); 
      if (this.modoEdicion != null && this.modoEdicion === 1){
        this.personasService.modificarPersona(this.index, persona1);
      }else{
        this.personasService.agregarPersona(persona1);
        
      }
      this.router.navigate(['personas']);
      //this.loggingService.eviaMensajeAconsola("enviamos Persona " + persona1.name + persona1.lastName)
      //this.PersonaCreada.emit(persona1); //agremos las varibles que recibimos y las emitimos por medio de Personascreada que es de tipo Persona
    }

    eliminarPersona(){
      if(this.index != null){
        this.personasService.eliminarPersona(this.index);
      }
      this.router.navigate(['personas']);
    }

}

