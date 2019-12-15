import Row from "./row";
import { Point, calcPath, Path } from "../settings/game-funcs";
import Settings from "../settings/static-settings";
import "../css/board.css";

export default class Board {
  private boardDiv: HTMLDivElement;
  private startPath: any;
  private drawPath: any;
  private path: Path;
  private firstTile: Point;
  private lastTile: Point;
  constructor() {
    this.boardDiv = document.createElement("div");

    this.startPath = (e: Event) => {
      let indexA = (<HTMLDivElement>e.target).id.slice(4, 6);
      Settings.firstTile = Settings.tilesList[parseInt(indexA)];
      (<HTMLDivElement>e.target).style.backgroundColor = "pink";
      Settings.isPathStarted = true;
      // calcPath(
      //   { x: Settings.firstTile.x, y: Settings.firstTile.y },
      //   { x: 4, y: 4 }
      // );
      this.boardDiv.removeEventListener("click", this.startPath);
      this.boardDiv.addEventListener("mousemove", this.drawPath);
    };

    this.drawPath = (e: Event) => {
      let indexB = (<HTMLDivElement>e.target).id.slice(4, 6);
      Settings.lastTile = Settings.tilesList[parseInt(indexB)];
      console.log(Settings.lastTile);

      this.path = calcPath(
        { x: Settings.firstTile.x, y: Settings.firstTile.y },
        { x: Settings.lastTile.x, y: Settings.lastTile.y }
      );

      for (let i = 0; i < 9; i++) {
        let row = document.body.lastElementChild.firstElementChild.children[i];
        for (let j = 0; j < 9; j++)
          (<HTMLDivElement>row.children[j]).style.backgroundColor = "white";
      }

      (<HTMLDivElement>e.target).style.backgroundColor = "pink";

      for (let i = 0; i < this.path.pathIds.length; i++) {
        let indexEnd = (
          parseInt(this.path.pathIds[i][2]) * 9 +
          parseInt(this.path.pathIds[i][0])
        ).toString();
        let end: string;
        parseInt(indexEnd) < 10 ? (end = "0" + indexEnd) : (end = indexEnd);
        console.log(end);

        let div = document.getElementById(this.path.pathIds[i] + `-${end}`);
        div.style.backgroundColor = "pink";
      }
      // let coeff = findCoefficients(
      //   { x: Settings.firstTile.x, y: Settings.firstTile.y },
      //   { x: Settings.lastTile.x, y: Settings.lastTile.y }
      // );
      // console.log(coeff);

      // for (let x = 0; x < 9; x++) {
      //   let y: number = Math.round(findTileY(x, { a: coeff.a, b: coeff.b }));
      //   console.log(y);

      //   y <= Settings.lastTile.y
      //     ? console.log("mniejsze")
      //     : console.log("wieksze");
      // }
      // (<HTMLDivElement>e.target).style.backgroundColor = "pink";
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
    return this.boardDiv;
  }
}
