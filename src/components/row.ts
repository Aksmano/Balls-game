import Tile from "./tile";
import Settings from "../settings/static-settings";
import "../css/board.css";

export default class Row {
  id: string;
  constructor(rowId: string) {
    this.id = rowId;
  }

  render() {
    const row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < Settings.boardSize; i++) {
      let tile = new Tile(i, parseInt(this.id), Settings.indexNum);
      Settings.indexNum++;
      Settings.tilesList.push(tile);
      row.appendChild(tile.render());
    }
    return row;
  }
}
