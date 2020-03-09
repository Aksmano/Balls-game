import Ball from "./ball";

export default class Preview {
  private balls: Array<Ball> = [];
  private ballColors: Array<string>;
  //   private _ballColor: Array<string>;
  constructor(ballColors: Array<string>) {
    this.ballColors = ballColors;
    this.render();
  }

  setBallColors(colors: Array<string>) {
    for (let i = 0; i < colors.length; i++) {
      this.balls[i].color = colors[i];
    }
  }

  render() {
    for (let i = 0; i < 3; i++) {
      this.balls.push(new Ball(this.ballColors[i]));
      //   this._ballColor.push(ballColors[i]);
    }
    const prev = document.createElement("div");
    prev.className = "prev";
    prev.innerHTML = "<p class='next'>Następne:</p>";
    for (let i = 0; i < 3; i++) {
      prev.appendChild(this.balls[i].renderPrev());
    }
    document.body.children[1].appendChild(prev);
  }
}
