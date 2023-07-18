import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }
  
 @Input() valor: any = 0;

  incrementa(){
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }

  ngOnInit(): void {
  }

}
