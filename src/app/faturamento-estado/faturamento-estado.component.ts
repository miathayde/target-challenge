import { Component, OnInit } from '@angular/core';
import { FaturamentoEstado } from '../models/faturamento-estado';

@Component({
  selector: 'app-faturamento-estado',
  templateUrl: './faturamento-estado.component.html',
  styleUrls: ['./faturamento-estado.component.scss']
})
export class FaturamentoEstadoComponent implements OnInit {
  faturamentosMensaisEstados: Array<FaturamentoEstado> = [
    {estado: 'SP', faturamento: 67836.43, percentualFaturamento: 0},
    {estado: 'RJ', faturamento: 36678.66, percentualFaturamento: 0},
    {estado: 'MG', faturamento: 29229.88, percentualFaturamento: 0},
    {estado: 'ES', faturamento: 27165.48, percentualFaturamento: 0},
    {estado: 'Outros', faturamento: 19849.53, percentualFaturamento: 0}
  ];
  totalFaturamentos: number;

  constructor() { }

  ngOnInit(): void {
    this.calcularPercentualFaturamento();
  }

  calcularPercentualFaturamento() {
    this.totalFaturamentos = this.obterTotalFaturamentos();

    this.faturamentosMensaisEstados.forEach(x => {
      x.percentualFaturamento = Number(((x.faturamento / this.totalFaturamentos) * 100).toFixed(2));
    });
  }

  obterTotalFaturamentos(): number {
    var total = 0;
    this.faturamentosMensaisEstados.forEach(x => {
      total += x.faturamento;
    });

    return total;
  }
}
