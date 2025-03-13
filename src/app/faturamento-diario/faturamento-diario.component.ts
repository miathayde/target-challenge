import { Component, OnInit } from '@angular/core';
import { Faturamento } from '../models/faturamento';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faturamento-diario',
  templateUrl: './faturamento-diario.component.html',
  styleUrls: ['./faturamento-diario.component.scss']
})
export class FaturamentoDiarioComponent implements OnInit {
  faturamentosMensais: Array<Faturamento> = new Array<Faturamento>();
  menorFaturamento: Faturamento;
  maiorFaturamento: Faturamento;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obterDados().finally(() => {
      this.obterMenorFaturamento();
      this.obterMaiorFaturamento();
      this.obterFaturamentosSuperioresMedia();
    });
  }

  obterDados(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get('assets/faturamentos.json').subscribe(
        (response: Array<Faturamento>) => {
          this.faturamentosMensais = response;
          resolve();
        },
        (error) => {
          console.error('Erro na requisição HTTP:', error);
          reject();
        }
      );
    });
  }

  obterMenorFaturamento() {
    this.menorFaturamento = this.faturamentosMensais.reduce((previous, current) => {
      return (current.valor != 0 && previous.valor != 0 && previous.valor < current.valor) ? previous : current;
    });
  }

  obterMaiorFaturamento() {
    this.maiorFaturamento = this.faturamentosMensais.reduce((previous, current) => {
      return (previous.valor > current.valor) ? previous : current;
    });
  }

  obterFaturamentosSuperioresMedia() {
    const faturamentos = this.faturamentosMensais.filter(x => x.valor != 0);
  }
}
