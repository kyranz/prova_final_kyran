import { Component, Input, OnInit } from '@angular/core';
import { carro } from '../carros';
import { carros } from '../mock_carros'

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  constructor() { }

  
  carros = carros;
  
  ngOnInit(): void {
  }
  
  // insertCarro(carro: carro): void {
  //   this.carros.push(carro);
  //   carros[carros.length - 1].codigo = Math.floor(Math.random() * (99999 - 10000) + 10000);
  // }

  selectedCarro?: carro;
  onSelect(carro: carro): void {
    this.selectedCarro = carro;
  }

}
