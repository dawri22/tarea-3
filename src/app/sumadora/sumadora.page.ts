import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {

  constructor() { }

  num1: number = 0;
  num2: number = 0;

  result: number = 0;

  sumar() {
    this.result = this.num1 + this.num2;
  }

  ngOnInit() {
  }

}
