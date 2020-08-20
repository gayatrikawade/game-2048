import { Injectable } from "@angular/core";



@Injectable()
export class GameService {

    cells = Array(16).fill(null);
    rows = [];
    columns = [];

    initializaGame() {

        // this.columns = [
        //     [this.cells[0], this.cells[4], this.cells[8], this.cells[12]],
        //     [this.cells[1], this.cells[5], this.cells[9], this.cells[13]],
        //     [this.cells[2], this.cells[6], this.cells[10], this.cells[14]],
        //     [this.cells[3], this.cells[7], this.cells[11], this.cells[15]],
        //   ];
      
        //   this.rows = [
        //     [this.cells[0], this.cells[1], this.cells[2], this.cells[3]],
        //     [this.cells[4], this.cells[5], this.cells[6], this.cells[7]],
        //     [this.cells[8], this.cells[9], this.cells[10], this.cells[11]],
        //     [this.cells[12], this.cells[13], this.cells[14], this.cells[15]],
        //   ];
        }


    constructor(){
        this.initializaGame();
    }

}