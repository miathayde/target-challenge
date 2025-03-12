import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { FaturamentoDiarioComponent } from './faturamento-diario/faturamento-diario.component';
import { FaturamentoEstadoComponent } from './faturamento-estado/faturamento-estado.component';
import { InversaoStringComponent } from './inversao-string/inversao-string.component';

const routes: Routes = [
  { path: '', component: InitialPageComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'faturamento-diario', component: FaturamentoDiarioComponent },
  { path: 'faturamento-estado', component: FaturamentoEstadoComponent },
  { path: 'inversao-strings', component: InversaoStringComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
