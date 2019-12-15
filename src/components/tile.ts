import "../css/board.css";

export default class Tile {
  id: string;
  index: number;
  x: number;
  y: number;
  isBall: boolean;
  isStart: boolean;
  constructor(tileNum: number, rowNum: number, index: number) {
    this.id = `${tileNum}_${rowNum}-${index < 10 ? "0" + index : index}`;
    this.x = tileNum;
    this.y = rowNum;
    this.index = index;
    this.isBall = false;
    this.isStart = false;
  }

  randomizeColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() *
      255}, ${Math.random() * 255})`;
  }

  render() {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.id = this.id
    // tile.nodeValue = this.id
    // tile.style.backgroundColor = this.randomizeColor();
    return tile;
  }
}
