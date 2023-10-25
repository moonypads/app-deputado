import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';

const routes: Routes = [
  {path: 'inicio', component: ExibeDeputadosComponent }, 
  {path:'busca', component: BuscaDeputadoComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
