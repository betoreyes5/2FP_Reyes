import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material/material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PadreMainComponent } from './components/padre-main/padre-main.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing/app-routing.module';
import { NoencontradoComponent } from './components/noencontrado/noencontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SignupComponent } from './login/signup/signup.component';
import { AgregarAlumnosComponent } from './components/alumnos/acciones-alumnos/agregar-alumnos/agregar-alumnos.component';
import { EditarAlumnosComponent } from './components/alumnos/acciones-alumnos/editar-alumnos/editar-alumnos.component';
import { ClasesComponent } from './components/clases/clases.component';
import { CursosModule } from './cursos/module/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    PadreMainComponent,   
    AlumnosComponent,     
    NoencontradoComponent, 
    InicioComponent, 
    SignupComponent, 
    AgregarAlumnosComponent, 
    EditarAlumnosComponent, 
    ClasesComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CursosModule 
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
