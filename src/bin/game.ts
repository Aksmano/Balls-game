import { Colors, ColorsArr, calcTileIndex } from "../settings/game-funcs";
import Ball from "../components/ball";
import Board from "../components/board";
import Settings from "../settings/static-settings";

export default class Game {
  BoardClass: Board;
  private board: HTMLElement;
//   private ballArr: Array<Array<number | string>> = [];
//   private balls: Array<Array<Ball>> = [];
  constructor() {
    this.BoardClass = new Board();
    this.BoardClass.render();
    this.board = document.getElementById("container");
    for (let i = 0; i < 9; i++) {
      Settings.ballArr.push([]);
      for (let j = 0; j < 9; j++) Settings.ballArr[i].push(0);
    }
    for (let i = 0; i < 9; i++) {
      Settings.balls.push([]);
      for (let j = 0; j < 9; j++) Settings.balls[i].push(null);
    }
    this.drawBalls();
  }

  drawBalls() {
    for (let i = 0; i < 18; i++) {
      let colorIndex = Math.round(Math.random() * 7);
      colorIndex > 6 ? colorIndex-- : null;
      console.log(ColorsArr[colorIndex]);
      while (true) {
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 9);
        if (Settings.ballArr[y][x] == 0) {
          Settings.ballArr[y][x] = ColorsArr[colorIndex][0].toUpperCase();
          Settings.balls[y][x] = new Ball(
            ColorsArr[colorIndex],
            ColorsArr[colorIndex][0].toUpperCase(),
            { x: x, y: y }
          );
          let endIndex = calcTileIndex(`${x}_${y}`);
          Settings.tilesList[parseInt(endIndex)].isBall = true
          let tile = document.getElementById(`${x}_${y}-${endIndex}`);
          tile.appendChild(Settings.balls[y][x].render());
          break;
          //   this.
        }
      }
    //   console.log(Settings.balls);
    //   console.log(Settings.ballArr);
    }
  }
}
