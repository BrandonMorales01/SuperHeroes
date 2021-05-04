import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Villano } from './villano';
@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {
 selectedVillano?: Villano;
 villanos: Villano[]=[
  {id:1, name: "Esqueletor",  nivel: 50, namepower: "muy malo"},
  {id:2, name: "Megamente", nivel: 2013, namepower: "Tiene una mente grandota"},
  {id:3, name: "Thanos", nivel: 1000, namepower: "Guante"},
  {id:4, name: "Duende verde", nivel:100, namepower: "dinero"},
  {id:5, name: "Dormamu", nivel:200, namepower: "Control dimension espejo"},
  {id:6, name: "Vuitre", nivel:195, namepower: "Armas alienigenas"},
];
  numero = 0;
  base = 5;
  constructor() { }
  ngOnInit() {
  }
  onSelect(villano: Villano): void {
    this.selectedVillano = villano;
  }
  acumulador(valor:number){
    this.numero += valor;
  }
  sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }

}
