import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { DetallesComponent } from './detalles/detalles.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Error404Component } from './error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    DetallesComponent,
    EncabezadoComponent,
    Error404Component,
    InicioComponent,
    ListaDeLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
