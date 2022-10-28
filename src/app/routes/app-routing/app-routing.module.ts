import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from 'src/app/components/alumnos/alumnos.component';

import { NoencontradoComponent } from 'src/app/components/noencontrado/noencontrado.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { ClasesComponent } from 'src/app/components/clases/clases.component';
import { CursosComponent } from 'src/app/cursos/components/cursos.component';


const routes : Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'inicio'    
  },
  {
    path:'inicio', component: InicioComponent
  },
  {
    path:'alumnos', component: AlumnosComponent
  },
  {
    path:'cursos', component: CursosComponent
  },
  {
    path:'clases', component: ClasesComponent
  },
  {
    path:'**', component: NoencontradoComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
