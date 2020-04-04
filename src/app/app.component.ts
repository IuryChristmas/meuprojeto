import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Iury';
  adicionado = false;

  /*adicionar(nome : string) {
    this.nome = nome
  }*/

  adicionar() {
    this.adicionado = true;
  }
}
