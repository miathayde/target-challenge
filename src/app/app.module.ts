import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { FaturamentoDiarioComponent } from './faturamento-diario/faturamento-diario.component';
import { FaturamentoEstadoComponent } from './faturamento-estado/faturamento-estado.component';
import { InversaoStringComponent } from './inversao-string/inversao-string.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent,
    InitialPageComponent,
    FaturamentoDiarioComponent,
    FaturamentoEstadoComponent,
    InversaoStringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
