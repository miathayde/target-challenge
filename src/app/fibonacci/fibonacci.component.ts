import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnChanges {
  number: number;
  resultado: number;
  sequenciaFibonacci: Array<number>;
  exibirResultado: boolean = null;

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  gerarSequencia() {
    this.resultado = this.number;
    this.sequenciaFibonacci = [0, 1];

    while (true) {
      const nextFib = this.sequenciaFibonacci[this.sequenciaFibonacci.length - 1] + 
        this.sequenciaFibonacci[this.sequenciaFibonacci.length - 2];
      if (nextFib > this.number) break; 

      this.sequenciaFibonacci.push(nextFib);
    }

    if (this.sequenciaFibonacci.includes(this.number)) {
      this.exibirResultado = true;
    } else {
      this.exibirResultado = false;
    }
  }

  limpar() {
    this.number = null;
    this.exibirResultado = null;
  }
}
