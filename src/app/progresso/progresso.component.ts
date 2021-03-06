import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //progresso é classe filha de painel
  //posso usar @Input do angular para trocar informação
  //de classes pai para classes filhas
  //no arquivo html do painel, devo incluir <app-progresso [progresso]="progresso"></app-progresso>
  @Input() public progresso: number = 0

  //caso eu queira utilizar uma outra variável, exemplo <app-progresso [variavel_x]="progresso"></app-progresso>
  //@Input ficaria da seguinte forma:
  //@Input('variavel_x') public progresso: number = 0

  constructor() { }

  ngOnInit() {
  }

}
