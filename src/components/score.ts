export default class Score {
  private score: number = 0;
  //   private _ballColor: Array<string>;
  constructor() {
    this.render();
  }

  render() {
    const score = document.createElement("div");
    score.className = "prev";
    score.innerHTML =
      "<p class='next'>Wynik:<div id='score' class='next sc'>0</div></p>";
    document.body.children[1].appendChild(score);
  }
}
