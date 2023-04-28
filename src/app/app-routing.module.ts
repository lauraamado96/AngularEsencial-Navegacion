import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { DetallesComponent } from './detalles/detalles.component';
import { Error404Component } from './error404/error404.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';

const routes: Routes = [
  { path: 'lista-libros', component: ListaDeLibrosComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'detalles/:libroId', component: DetallesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'lista-libros' },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
