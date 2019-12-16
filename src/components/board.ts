import Row from "./row";
import { Point, calcPath, Path, calcTileIndex } from "../settings/game-funcs";
import Settings from "../settings/static-settings";
import "../css/board.css";

export default class Board {
  private boardDiv: HTMLDivElement;
  private startPath: any;
  private drawPath: any;
  private endPath: any;
  private path: Path;
  private firstTile: Point;
  private lastTile: Point;
  constructor() {
    this.boardDiv = document.createElement("div");

    this.endPath = (e: Event) => {
      console.log(this.path);
      
      for (let i = 0; i < 9; i++) {
        let row = document.body.lastElementChild.firstElementChild.children[i];
        for (let j = 0; j < 9; j++)
          (<HTMLDivElement>row.children[j]).style.backgroundColor =
            "rgb(60, 60, 60)";
      }
      this.boardDiv.removeEventListener("mousemove", this.drawPath);
      this.boardDiv.removeEventListener("click", this.endPath);
      this.boardDiv.addEventListener("click", this.startPath);
      Settings.isPathStarted = false
    };

    this.startPath = (e: Event) => {
      let indexA = (<HTMLDivElement>e.target).id.slice(4, 6);
      Settings.firstTile = Settings.tilesList[parseInt(indexA)];
      (<HTMLDivElement>e.target).style.backgroundColor = "rgb(140, 140, 140)";
      Settings.isPathStarted = true;
      // calcPath(
      //   { x: Settings.firstTile.x, y: Settings.firstTile.y },
      //   { x: 4, y: 4 }
      // );
      this.boardDiv.removeEventListener("click", this.startPath);
      this.boardDiv.addEventListener("mousemove", this.drawPath);
      this.boardDiv.addEventListener("click", this.endPath);
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
          (<HTMLDivElement>row.children[j]).style.backgroundColor =
            "rgb(60, 60, 60)";
      }

      (<HTMLDivElement>e.target).style.backgroundColor = "rgb(140, 140, 140)";

      for (let i = 0; i < this.path.pathIds.length; i++) {
        let end = calcTileIndex(this.path.pathIds[i]);
        console.log(end);

        let div = document.getElementById(this.path.pathIds[i] + `-${end}`);
        div.style.backgroundColor = "rgb(140, 140, 140)";
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
    const main = document.createElement("div");
    main.id = "main";
    main.appendChild(this.boardDiv);
    document.body.appendChild(main);
  }
}
