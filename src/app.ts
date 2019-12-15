/* TODO
    - Równanie prostej przechodzącej przez dwa punkty
    - Po kolei sprawdzamy współrzędne punktów
    - Kolizje
*/

import Board from "./components/board";
import './css/board.css';

const main = document.createElement("div");
main.id = "main";

const board = new Board();
main.appendChild(board.render());

document.body.appendChild(main);
