import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  this.initGame()
  }

  cells = [];

  initGame(){
    this.cells = this.gameService.cells;
    this.gameService.randomize();
    this.gameService.randomize();

  }

}
