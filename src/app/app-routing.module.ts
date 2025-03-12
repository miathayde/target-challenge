import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { InitialPageComponent } from './initial-page/initial-page.component';

const routes: Routes = [
  { path: '', component: InitialPageComponent },
  { path: 'fibonacci', component: FibonacciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
