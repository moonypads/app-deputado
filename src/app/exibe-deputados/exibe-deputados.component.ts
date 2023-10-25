import { Component } from '@angular/core';
import { deputado } from '../deputado';
import { DeputadoService } from '../deputado.service';

@Component({
  selector: 'app-exibe-deputados',
  templateUrl: './exibe-deputados.component.html',
  styleUrls: ['./exibe-deputados.component.css']
})
export class ExibeDeputadosComponent {
  deputados: deputado[] = []
  constructor(private ds: DeputadoService){
    this.ds.obterDeputados().subscribe(
      res => {
        this.deputados = res.dados
    })
   }
}
