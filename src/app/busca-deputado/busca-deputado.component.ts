import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { deputado } from '../deputado';
import { DeputadoService } from '../deputado.service';

@Component({
  selector: 'app-busca-deputado',
  templateUrl: './busca-deputado.component.html',
  styleUrls: ['./busca-deputado.component.css']
})
export class BuscaDeputadoComponent {
  deputados: deputado[]
  depForm: FormGroup
  constructor(private ds: DeputadoService, private fb: FormBuilder){
  this.deputados = []
  this.depForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2)]]
  })
  }

  buscar(){
    const nome = this.depForm.get('nome')?.value
    this.ds.obterDeputadoPorNome(nome).subscribe(res =>{
      this.deputados = res.dados

    })
  }
}
