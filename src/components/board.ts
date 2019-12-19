import Row from "./row";
import {
  Point,
  calcPath,
  Path,
  calcTileIndex,
  isAvailable
} from "../settings/game-funcs";
import Settings from "../settings/static-settings";
import "../css/board.css";

export default class Board {
  private boardDiv: HTMLDivElement;
  private startPath: any;
  private drawPath: any;
  private endPath: any;
  private ballClick: any;
  private path: Path;
  private firstTile: Point;
  private lastTile: Point;
  constructor() {
    this.boardDiv = document.createElement("div");

    this.ballClick = (e?: Event) => {
      Settings.clickedBallHTML.removeEventListener("click", this.ballClick);
      Settings.clickedBallHTML.style.border = "5px solid white";
      console.log("CHUUUUJ");
    };

    this.endPath = (e: Event) => {
      console.log(":ooooo");

      for (let i = 0; i < 9; i++) {
        let row = document.body.children[1].firstElementChild.children[i];
        for (let j = 0; j < 9; j++)
          (<HTMLDivElement>row.children[j]).style.backgroundColor =
            "rgb(60, 60, 60)";
      }
      if (
        (<HTMLDivElement>e.target).id == Settings.clickedBallHTML.id.slice(0, 3)
      ) {
        console.log("ddddd");

        this.ballClick();
        this.boardDiv.removeEventListener("mousemove", this.drawPath);
        this.boardDiv.removeEventListener("click", this.endPath);
        this.boardDiv.addEventListener("click", this.startPath);
        Settings.isPathStarted = false;
      } else if (
        (this.path.pathIds.length > 0 &&
          (<HTMLDivElement>e.target).children.length == 0) ||
        (<HTMLDivElement>e.target).className == "ball"
      ) {
        console.log((<HTMLDivElement>e.target).children.length);

        if (
          (<HTMLDivElement>e.target).className == "ball" &&
          isAvailable(
            {
              x: parseInt((<HTMLDivElement>e.target).id.slice(0, 1)),
              y: parseInt((<HTMLDivElement>e.target).id.slice(2, 3))
            },
            Settings.ballArr
          ) == true
        ) {
          console.log("here");
          this.ballClick();
          let indexA = (<HTMLDivElement>e.target).parentElement.id.slice(4, 6);
          Settings.clickedBallHTML = <HTMLDivElement>e.target;
          Settings.firstTile = Settings.tilesList[parseInt(indexA)];
          Settings.clickedBallHTML.style.border = "5px solid white";
          (<HTMLDivElement>e.target).style.border = "none";
          Settings.isPathStarted = true;
          Settings.clickedBallColor = Settings.clickedBallHTML.style.backgroundColor[0].toUpperCase();
        } else if (
          (<HTMLDivElement>e.target).className == "tile" &&
          (<HTMLDivElement>e.target).id !=
            Settings.clickedBallHTML.id.slice(0, 3) &&
          (<HTMLDivElement>e.target).children.length == 0
        ) {
          (<HTMLDivElement>e.target).appendChild(Settings.clickedBallHTML);
          console.log(<HTMLDivElement>e.target);
          console.log(Settings.clickedBallHTML);

          Settings.ballArr = this.path.pathNum;
          this.path.pathNum[Settings.firstTile.y][Settings.firstTile.x] = 0;
          this.path.pathNum[Settings.lastTile.y][Settings.lastTile.x] =
            Settings.clickedBallColor;
          console.log(Settings.ballArr);

          for (let i = 0; i < 9; i++)
            for (let j = 0; j < 9; j++)
              if (Settings.ballArr[i][j] > 0) Settings.ballArr[i][j] = 0;

          this.ballClick();
          this.boardDiv.removeEventListener("mousemove", this.drawPath);
          this.boardDiv.removeEventListener("click", this.endPath);
          this.boardDiv.addEventListener("click", this.startPath);
          Settings.isPathStarted = false;
        }
      } else if (
        (<HTMLDivElement>e.target).className != "ball" &&
        (<HTMLDivElement>e.target).children.length == 0
      )
        (<HTMLDivElement>e.target).style.backgroundColor = "rgb(255, 0, 0)";
    };

    this.startPath = (e: Event) => {
      if (
        (<HTMLDivElement>e.target).className == "ball" &&
        isAvailable(
          {
            x: parseInt((<HTMLDivElement>e.target).id.slice(0, 1)),
            y: parseInt((<HTMLDivElement>e.target).id.slice(2, 3))
          },
          Settings.ballArr
        ) == true
      ) {
        console.log("sssss");

        let indexA = (<HTMLDivElement>e.target).parentElement.id.slice(4, 6);
        Settings.clickedBallHTML = <HTMLDivElement>e.target;
        Settings.firstTile = Settings.tilesList[parseInt(indexA)];
        // (<HTMLDivElement>e.target).parentElement.style.backgroundColor =
        //   "rgb(140, 140, 140)";
        (<HTMLDivElement>e.target).style.border = "none";
        Settings.isPathStarted = true;
        Settings.clickedBallColor = Settings.clickedBallHTML.style.backgroundColor[0].toUpperCase();
        // console.log(Settings.clickedBallHTML.style.backgroundColor[0].toUpperCase());

        Settings.clickedBallHTML.addEventListener("click", this.ballClick);
        this.boardDiv.removeEventListener("click", this.startPath);
        this.boardDiv.addEventListener("mousemove", this.drawPath);
        this.boardDiv.addEventListener("click", this.endPath);
      }
    };

    this.drawPath = (e: Event) => {
      for (let i = 0; i < 9; i++) {
        let row = document.body.children[1].firstElementChild.children[i];
        for (let j = 0; j < 9; j++)
          (<HTMLDivElement>row.children[j]).style.backgroundColor =
            "rgb(60, 60, 60)";
      }

      console.log((<HTMLDivElement>e.target).id.slice(0, 3));
      console.log(Settings.clickedBallHTML.id);

      if (
        (<HTMLDivElement>e.target).className == "ball" ||
        (<HTMLDivElement>e.target).id == Settings.clickedBallHTML.id ||
        (<HTMLDivElement>e.target).id.slice(0, 3) ==
          Settings.clickedBallHTML.id ||
        (<HTMLDivElement>e.target).children.length > 0
      ) {
        console.log("dupadupadupa");
        console.log((<HTMLDivElement>e.target).id);
        console.log(Settings.clickedBallHTML.id);
      } else {
        let indexB = (<HTMLDivElement>e.target).id.slice(4, 6);
        Settings.lastTile = Settings.tilesList[parseInt(indexB)];

        this.path = calcPath(
          { x: Settings.firstTile.x, y: Settings.firstTile.y },
          { x: Settings.lastTile.x, y: Settings.lastTile.y }
        );

        for (let i = 1; i < this.path.pathIds.length; i++)
          if (this.path.pathIds[0] == this.path.pathIds[i]) {
            this.path.pathIds = this.path.pathIds.slice(0, i);
            break;
          }

        for (let i = 0; i < this.path.pathIds.length; i++) {
          let end = calcTileIndex(this.path.pathIds[i]);
          console.log(end);
          let div = document.getElementById(this.path.pathIds[i] + `-${end}`);
          div.style.backgroundColor = "rgb(140, 140, 140)";
        }

        if (
          this.path.pathIds.length == 0 &&
          Settings.firstTile != Settings.lastTile
        )
          (<HTMLDivElement>e.target).style.backgroundColor = "rgb(255, 0, 0)";
        else
          (<HTMLDivElement>e.target).style.backgroundColor =
            "rgb(140, 140, 140)";
      }
    };
  }

  render() {
    this.boardDiv.id = "container";
    for (let i = 0; i < Settings.boardSize; i++) {
      let row = new Row(i.toString());
      this.boardDiv.appendChild(row.render());
    }
    console.log(Settings.tilesList);
    this.boardDiv.addEventListener("click", this.startPath);
    const main = document.createElement("div");
    main.id = "main";
    main.appendChild(this.boardDiv);
    document.body.appendChild(main);
  }
}
