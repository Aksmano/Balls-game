import "../css/board.css";
import { Point } from "../settings/game-funcs";

export default class Ball {
  color: string;
  idColor: string;
  point: Point;
  constructor(color: string, colorId: string, position: Point) {
    this.color = color;
    this.idColor = colorId;
    this.point = position;
  }

  render() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.id = `${this.point.y}_${this.point.x}`
    ball.style.backgroundColor = this.color;
    // ball.style.transition = "background 0.4s ease-in-out";
    return ball;
  }
}
