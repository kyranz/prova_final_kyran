import { Component, OnInit } from '@angular/core';
import { carro } from '../carros'
import { ListarComponent } from '../listar/listar.component';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  carro: carro = {} as carro;

  constructor(private listar: ListarComponent) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    this.listar.Carros.push(this.carro);
  }

  cancelar(): void {
    this.carro = {} as carro;
  }

}
