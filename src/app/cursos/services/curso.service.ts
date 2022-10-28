import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models/Curso';


@Injectable()
export class CursoService {

cursos: Curso[] = [

  { id: 1000, curso: 'PHYTON', profesor: 'Martha Hernandez', costo: '25 USD', fecha: new Date(2022, 0, 2)  },
  { id: 2000, curso: 'C#', profesor: 'Luis Ortiz', costo: '15 USD', fecha: new Date(2022, 0, 2)  },
  { id: 3000, curso: 'RUBY', profesor: 'Jaquelin Mendez', costo: '12 USD', fecha: new Date(2022, 0, 2)  },
  { id: 4000, curso: 'VUEJS', profesor: 'Martha Hernandez', costo: '22 USD', fecha: new Date(2022, 0, 2)  }  
];

cursosSubject: BehaviorSubject<Curso[]> = new BehaviorSubject(this.cursos);

  constructor( ) { }

listaCursos(): Observable<Curso[]>{
  return this.cursosSubject.asObservable();
}

agregarCurso(curso:Curso){
  this.cursos.push(curso);
  this.cursosSubject.next(this.cursos);
}

editarCurso(curso: Curso){
 // console.log('CURSO =' + curso.id)
  let indice = this.cursos.findIndex((c:Curso)=> c.id === curso.id);
  //console.log('INDICE = ' + indice);
  if (indice > -1){
    this.cursos[indice] = curso;
  }
  this.cursosSubject.next(this.cursos);
}

eliminarCurso(id:number){  
  let indice = this.cursos.findIndex((c:Curso)=> c.id === id);
  if (indice > -1){
    this.cursos.splice(indice, 1);
  }
  this.cursosSubject.next(this.cursos);
}




}
