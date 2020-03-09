import {
  Colors,
  ColorsArr,
  calcTileIndex,
  isAvailable,
  Point
} from "../settings/game-funcs";
import Ball from "../components/ball";
import Board from "../components/board";
import Settings from "../settings/static-settings";
import Preview from "../components/preview";
import Score from "../components/score";

export default class Game {
  BoardClass: Board;
  private board: HTMLElement;
  private nextColors: Array<string> = ["", "", ""];
  private preview: Preview;
  private score: Score;
  //   private ballArr: Array<Array<number | string>> = [];
  //   private balls: Array<Array<Ball>> = [];
  constructor() {
    this.BoardClass = new Board(this);
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
    this.drawColors();
    this.preview = new Preview(this.nextColors);
    this.score = new Score();
    this.drawBalls();
  }

  drawColors() {
    for (let i = 0; i < 3; i++) {
      let colorIndex = Math.round(Math.random() * 7);
      colorIndex > 6 ? colorIndex-- : null;
      this.nextColors[i] = ColorsArr[colorIndex];
      console.log(ColorsArr[colorIndex]);
    }
  }

  drawBalls() {
    for (let i = 0; i < 3; i++) {
      while (true) {
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 9);
        if (Settings.ballArr[y][x] == 0) {
          Settings.ballArr[y][x] = this.nextColors[i][0].toUpperCase();
          Settings.balls[y][x] = new Ball(this.nextColors[i], {
            x: x,
            y: y
          });
          let endIndex = calcTileIndex(`${x}_${y}`);
          Settings.tilesList[parseInt(endIndex)].isBall = true;
          let tile = document.getElementById(`${x}_${y}-${endIndex}`);
          tile.appendChild(Settings.balls[y][x].render());
          break;
          //   this.
        }
      }
      //   console.log(Settings.balls);
      //   console.log(Settings.ballArr);
    }
    this.drawColors();
    this.preview.setBallColors(this.nextColors);
  }

  checkBalls() {}

  checkBallsVert() {}

  checkBallsHoriz() {}

  checkBallsCross() {
    let isMatch: Array<string> = [];
    let currLetter: string | number = "";
    let indexI: number;
    let arrCoords: Point;
    for (let i = -4; i < 5; i++) {
      i < 0 ? (indexI = -i) : (indexI = i);
      isMatch = [];
      for (let j = 0; j < 9 - indexI; j++) {
        i < 0 ? console.log(j + indexI, j) : console.log(j, j + indexI);
        i < 0
          ? (arrCoords = { x: j, y: j + indexI })
          : (arrCoords = { x: j + indexI, y: j });

        if (
          isMatch.length < 5 &&
          currLetter != Settings.ballArr[arrCoords.y][arrCoords.x]
        ) {
          currLetter = "";
          isMatch = [];
        }
        if (typeof Settings.ballArr[arrCoords.y][arrCoords.x] == "string") {
          if (Settings.ballArr[arrCoords.y][arrCoords.x] == currLetter)
            isMatch.push(`${arrCoords.x}_${arrCoords.y}`);
          else {
            this.removeBalls(isMatch);
            currLetter = Settings.ballArr[arrCoords.y][arrCoords.x];
            isMatch = [`${arrCoords.x}_${arrCoords.y}`];
          }
        }
      }
    }
    this.removeBalls(isMatch);
    isMatch = [];
    currLetter = "";
    for (let k = 0; k < 2; k++)
      for (let i = 8 - k; i >= 4; i--) {
        k < 1 ? (indexI = i) : (indexI = -(i - 8));
        for (let j = 0; j <= i; j++) {
          // k < 1 ? console.log(j, indexI - j) : console.log(indexI + j, 8 - j);
          k < 1
            ? (arrCoords = { x: indexI - j, y: j })
            : (arrCoords = { x: 8 - j, y: j + indexI });
          if (
            isMatch.length < 5 &&
            currLetter != Settings.ballArr[arrCoords.y][arrCoords.x]
          ) {
            currLetter = "";
            isMatch = [];
          }
          if (typeof Settings.ballArr[arrCoords.y][arrCoords.x] == "string") {
            if (Settings.ballArr[arrCoords.y][arrCoords.x] == currLetter)
              isMatch.push(`${arrCoords.x}_${arrCoords.y}`);
            else {
              this.removeBalls(isMatch);
              currLetter = Settings.ballArr[arrCoords.y][arrCoords.x];
              isMatch = [`${arrCoords.x}_${arrCoords.y}`];
            }
          }
        }
      }
    this.removeBalls(isMatch);
  }

  removeBalls(isMatch: Array<string>) {
    console.log(isMatch.length);
    
    if (isMatch.length >= 5) {
      console.log(isMatch);

      Settings.scorePoints += isMatch.length;
      for (let k = 0; k < isMatch.length; k++) {
        // console.log(
        //   Settings.ballArr[parseInt(isMatch[k][2])][parseInt(isMatch[k][0])]
        // );
        Settings.ballArr[parseInt(isMatch[k][2])][parseInt(isMatch[k][0])] = 0;
        document
          .getElementById(isMatch[k])
          .parentElement.removeChild(document.getElementById(isMatch[k]));
      }
    console.log(Settings.ballArr);
  }
  }
}
