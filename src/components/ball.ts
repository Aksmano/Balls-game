import "../css/board.css";
import { Point } from "../settings/game-funcs";

export default class Ball {
  _color: string;
  idColor: string;
  point: Point;
  ball: HTMLElement;
  constructor(color: string, position?: Point) {
    this.ball = document.createElement("div");
    this._color = color;
    this.idColor = color[0].toUpperCase();
    if (position) this.point = position;
  }

  set color(newColor: string) {
    this.ball.style.backgroundColor = newColor;
  }

  get color(): string {
    return this._color;
  }

  render() {
    this.ball = document.createElement("div");
    this.ball.className = "ball";
    if (this.point) this.ball.id = `${this.point.x}_${this.point.y}`;
    this.ball.style.backgroundColor = this._color;
    // ball.style.transition = "background 0.4s ease-in-out";
    return this.ball;
  }

  renderPrev() {
    this.ball = document.createElement("div");
    this.ball.className = "ballPrev";
    if (this.point) this.ball.id = `${this.point.x}_${this.point.y}`;
    this.ball.style.backgroundColor = this._color;
    // ball.style.transition = "background 0.4s ease-in-out";
    return this.ball;
  }
}
