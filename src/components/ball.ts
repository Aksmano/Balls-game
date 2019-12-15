import "../css/board.css";

export default class Ball {
  color: string;
  idColor: number;
  constructor(color: string, colorId: number) {
    this.color = color;
    this.idColor = colorId;
  }

  render() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.color = this.color;
    return ball
  }
}
