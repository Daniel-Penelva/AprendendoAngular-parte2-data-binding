import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }
  
 @Input() valor: any = 0;

 @Output() mudouValor = new EventEmitter();

 @ViewChild('campoInput', {static:false}) campoValorInput!: ElementRef;

  incrementa(){
    this.campoValorInput.nativeElement.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.campoValorInput.nativeElement.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  ngOnInit(): void {
  }

}
