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
import Info from "../components/info";

export default class Game {
  BoardClass: Board;
  private board: HTMLElement;
  private nextColors: Array<string> = ["", "", ""];
  private preview: Preview;
  private score: Score;
  private info: Info;
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
    this.info = new Info();
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
    let counter = 0;
    for (let i = 0; i < 9; i++)
      for (let j = 0; j < 9; j++) if (Settings.ballArr[i][j] == 0) counter++;
    if (counter > 3) {
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
          }
        }
        //   console.log(Settings.balls);
        //   console.log(Settings.ballArr);
      }
      this.drawColors();
      this.preview.setBallColors(this.nextColors);
    } else {
      this.info.render();
      document.body.children[1].firstElementChild.addEventListener(
        "click",
        () => {
          document.body.removeChild(document.body.children[1]);
          this.BoardClass.render();
          this.board = document.getElementById("container");
          Settings.ballArr = [];
          for (let i = 0; i < 9; i++) {
            Settings.ballArr.push([]);
            for (let j = 0; j < 9; j++) Settings.ballArr[i].push(0);
          }
          for (let i = 0; i < 9; i++) {
            Settings.balls.push([]);
            for (let j = 0; j < 9; j++) Settings.balls[i].push(null);
          }
          this.drawColors();
          this.preview.render();
          this.score.render();
        }
      );
    }
  }

  checkBalls() {
    this.checkBallsVH();
    this.checkBallsCross();
  }

  checkBallsVH() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) this.compareBalls({ x: i, y: j });
      this.deleteBallsAndValues();
      for (let j = 0; j < 9; j++) this.compareBalls({ x: j, y: i });
      this.deleteBallsAndValues();
    }
  }

  checkBallsCross() {
    // case I:
    let j, k;
    for (let i = 4; i < 9; i++) {
      j = 0;
      while (i - j >= 0) {
        console.log(i - j, j);
        this.compareBalls({ x: i - j, y: j });
        j++;
      }
    }
    this.deleteBallsAndValues();

    // case II:
    for (let l = 1; l < 5; l++) {
      k = 0;
      j = l;
      while (j < 9) {
        console.log(8 - k, j);
        this.compareBalls({ x: 8 - k, y: j });
        j++;
        k++;
      }
    }
    this.deleteBallsAndValues();

    // case III:
    for (let i = 4; i >= 0; i--) {
      j = 0;
      while (i + j <= 8) {
        console.log(i + j, j);
        this.compareBalls({ x: i + j, y: j });
        j++;
      }
    }
    this.deleteBallsAndValues();

    // case IV:
    for (let l = 1; l < 5; l++) {
      k = 0;
      j = l;
      while (j < 9) {
        console.log(0 + k, j);
        this.compareBalls({ x: 0 + k, y: j });
        j++;
        k++;
      }
    }
    this.deleteBallsAndValues();
    console.log("Score: " + Settings.scorePoints);
  }

  deleteBallsAndValues() {
    this.removeBalls();
    Settings.currLetter = "";
    Settings.isMatch = [];
  }

  compareBalls(arrCoords: Point) {
    if (
      Settings.isMatch.length < 5 &&
      Settings.currLetter != Settings.ballArr[arrCoords.y][arrCoords.x]
    ) {
      Settings.currLetter = "";
      Settings.isMatch = [];
    }
    if (typeof Settings.ballArr[arrCoords.y][arrCoords.x] == "string") {
      if (Settings.ballArr[arrCoords.y][arrCoords.x] == Settings.currLetter) {
        Settings.isMatch.push(`${arrCoords.x}_${arrCoords.y}`);
      } else {
        this.removeBalls();
        Settings.currLetter = Settings.ballArr[arrCoords.y][arrCoords.x];
        Settings.isMatch = [`${arrCoords.x}_${arrCoords.y}`];
      }
    }
  }

  removeBalls() {
    console.log(Settings.isMatch.length);

    if (Settings.isMatch.length >= 5) {
      console.log(Settings.isMatch);

      Settings.scorePoints += Settings.isMatch.length * 10;
      for (let k = 0; k < Settings.isMatch.length; k++) {
        // console.log(
        //   Settings.ballArr[parseInt(isMatch[k][2])][parseInt(isMatch[k][0])]
        // );
        Settings.ballArr[parseInt(Settings.isMatch[k][2])][
          parseInt(Settings.isMatch[k][0])
        ] = 0;
        document
          .getElementById(Settings.isMatch[k])
          .parentElement.removeChild(
            document.getElementById(Settings.isMatch[k])
          );
      }
      document.getElementById("score").innerText = `${Settings.scorePoints}`;
      console.log(Settings.ballArr);
    }
  }
}
