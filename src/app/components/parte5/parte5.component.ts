import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parte5',
  templateUrl: './parte5.component.html',
  styleUrls: ['./parte5.component.scss']
})
export class Parte5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desactivado: boolean = false;

  titulo: string = '';

  logg(titulo){
    console.log(titulo);
  }

  seleccion2: string = 'Toyota';
}
