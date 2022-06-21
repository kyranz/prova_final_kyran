import { Component, OnInit } from '@angular/core';
import { carro } from '../carros';
import { carros } from '../mock_carros'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor() { }

  Carros = carros;

  ngOnInit(): void {
  }

  selectedCarro?: carro;
  onSelect(carro: carro): void {
    this.selectedCarro = carro;
  }

}
