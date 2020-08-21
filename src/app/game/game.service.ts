import { Injectable } from "@angular/core";
import { Cell } from './cell.model';


const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

@Injectable()
export class GameService {

    cells: Cell[] = Array(16).fill(null).map(_ => new Cell());

    rows: Cell[][] = [];
    columns: Cell[][] = [];


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


    constructor() {
        this.initializaGame();
    }

    private getEmptyCells(): Cell[] {
        return this.cells.reduce((acc: Cell[], cell) => {
            acc.push(cell);
            return acc;
        }, []);
    }

    randomize() {
        const emptyCell: Cell[] = this.getEmptyCells();

        const randIndex = rand(0, emptyCell.length - 1);

        const randValue = rand(1, 2) === 1 ? 2 : 4;
        emptyCell[randIndex].value = randValue;

    }



}