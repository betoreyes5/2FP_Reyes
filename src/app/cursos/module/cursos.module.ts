import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarCursosComponent } from '../components/acciones-cursos/agregar-cursos/agregar-cursos.component';
import { EditarCursosComponent } from '../components/acciones-cursos/editar-cursos/editar-cursos.component';
import { CursosComponent } from '../components/cursos.component';
import { CursoService } from '../services/curso.service';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  CursosComponent,
  AgregarCursosComponent,
  EditarCursosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
