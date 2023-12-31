import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://www.google.com/';

  // Não foi tipificado o tipo, pois o TypeScript sabe que é um String, já que está entre aspas simples.
  urlImage =
    'https://brixtonforged.com/wp-content/uploads/2023/03/miami-blue-porsche-991-gt3rs-wheels-brixton-forged-r11-r-satin-black.jpg';

  cursoAngular: boolean = true;

  valorAtual: String = '';
  valorSalvo: string = '';

  // Exemplo para output-property
  valorInicial = 15;

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Daniel', idade: 20
  }

  nomeCurso: string = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  // Mostrar no template através da variavel valorAtual
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:any) {
    this.valorSalvo = valor.target.value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }


  onMudouValor(evento:any){
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit(): void {}
}
