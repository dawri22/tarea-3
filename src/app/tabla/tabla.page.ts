import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  numero:number = 0;
  list:string[]=[];

  multiplicar(numero: number){
    if(numero!=null){
      this.list = [""];
    for(let i = 0; i < 14; i++){
      this.list.push(` ${numero} X ${i}= ${i*numero}`);
    }
  }else{
    alert("No ingreso ningun numero");
  }
}

getLista(){
  return this.list;
}

  constructor() { }

  ngOnInit() {
  }

}
