import Settings from "../settings/static-settings";

export default class Info {
  constructor() {}

  render() {
    let div = `<div id="info" class="info">You end the game, your score: ${Settings.scorePoints}<input type="submit" class="againButton" value="Play again"></div>`;
    document.body.children[1].innerHTML = div;
  }
}
