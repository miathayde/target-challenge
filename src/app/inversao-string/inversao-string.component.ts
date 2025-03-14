import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inversao-string',
  templateUrl: './inversao-string.component.html',
  styleUrls: ['./inversao-string.component.scss']
})
export class InversaoStringComponent implements OnInit {
  string: string;
  stringInvertida: string;
  exibirResultado: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  inverterString() {
    const arrayLetras = this.string.split('');

    var arrayLetrasInvertido = [];
    arrayLetras.forEach(x => {
      arrayLetrasInvertido.unshift(x);
    });

    this.stringInvertida = arrayLetrasInvertido.join('');
    this.exibirResultado = true;
  }

  limpar() {
    this.exibirResultado = false;
    this.string = '';
    this.stringInvertida = '';
  }
}
