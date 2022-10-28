import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Curso } from '../models/Curso';
import { CursoService } from '../services/curso.service';
import { AgregarCursosComponent } from './acciones-cursos/agregar-cursos/agregar-cursos.component';
import { EditarCursosComponent } from './acciones-cursos/editar-cursos/editar-cursos.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos$!:  Observable<Curso[]>;

  constructor(
     private dialog: MatDialog, 
     private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.listaCursos()
  }

  openDialog(): void {
    this.dialog.open(AgregarCursosComponent, {
      width: '45%',
      height: '55%',            
    }).afterClosed().subscribe((result: any) => { 
      if( result != undefined){
       this.nuevoCurso(result);
     // console.log( result )
      }         
   });
  }

  nuevoCurso(curso:any){
    this.cursoService.agregarCurso(curso);
  }

  editarCurso(element:any ){
    this.dialog.open(EditarCursosComponent, {
      width: '45%',
      height: '60%', 
      data: element         
    }).afterClosed().subscribe((result: any) => { 
      if( result != undefined){
      // console.log(result)
        this.cursoService.editarCurso(result);
      }     
    }); 
  }

  eliminarCurso(id:number){
    this.cursoService.eliminarCurso(id);
  }



}
