import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './game/board/board.component';
import { CellComponent } from './game/cell/cell.component';
import { GameService } from './game/game.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
