import { Point } from "./game-funcs";
import Tile from "../components/tile";
import Ball from "../components/ball";

export default class Settings {
  public static isPathStarted: boolean = false;
  public static boardSize: number = 9;
  public static indexNum: number = 0;
  public static tilesList: Array<Tile> = [];
  public static firstTile: any;
  public static lastTile: any;
  public static ballArr: Array<Array<number | string>> = [];
  public static balls: Array<Array<Ball>> = [];
  public static clickedBall: Ball;
  public static clickedBallHTML: HTMLElement;
  public static clickedBallColor: string;
  public static scorePoints: number = 0
}
