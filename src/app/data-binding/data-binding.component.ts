import { Component, OnInit } from '@angular/core';

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

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  // No console mostra o que está sendo digitado
  onKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value);
  }

  constructor() {}

  ngOnInit(): void {}
}
