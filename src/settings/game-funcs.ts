import Settings from "./static-settings";

export interface Point {
  x: number;
  y: number;
}

export interface Coefficient {
  a: number;
  b: number;
}

export interface ArrayIndex {
  i: number;
  j?: number;
  k?: number;
}

export interface Path {
  pathNum: Array<Array<any>>;
  pathIds: Array<string>;
}

export const ColorsArr: Array<string> = [
  "red",
  "orange",
  "indigo",
  "sienna",
  "magenta",
  "green",
  "dodgerblue"
];

export enum Colors {
  "firebrick" = "F",
  "darkturquise" = "D",
  "lightseagreen" = "L",
  "yellow" = "Y",
  "magenta" = "M",
  "green" = "G",
  "teal" = "T"
}

export var signArr: Array<Array<any>> = [];
export var pathArr: Array<Array<Array<string>>> = [];
export var controlM: boolean = false;

export const findCoefficients = (pointA: Point, pointB: Point): Coefficient => {
  let newCoefficient: Coefficient = { a: 0, b: 0 };
  newCoefficient.a = -(pointA.y - pointB.y) / (pointA.x - pointB.x);
  newCoefficient.b = newCoefficient.a * pointA.x - pointA.y;
  return newCoefficient;
};

export const findTileY = (x: number, coefficient: Coefficient): number => {
  const y: number = Math.round(coefficient.a * x + coefficient.b);
  console.log(y);
  return y;
};

export const calcTileIndex = (tileId: string): string => {
  let indexEnd = (parseInt(tileId[2]) * 9 + parseInt(tileId[0])).toString();
  let end: string;
  parseInt(indexEnd) < 10 ? (end = "0" + indexEnd) : (end = indexEnd);
  return end;
};

export const calcPath = (pointA: Point, pointB: Point): Path => {
  signArr = [];
  pathArr = [];
  controlM = false;

  for (let i = 0; i < 9; i++) {
    signArr.push([]);
    for (let j = 0; j < 9; j++)
      Settings.ballArr[i][j] == 0
        ? (signArr[i][j] = 0)
        : (signArr[i][j] = Settings.ballArr[i][j]);
  }

  for (let i = 0; i < 9; i++) {
    pathArr.push([]);
    for (let j = 0; j < 9; j++) pathArr[i].push([]);
  }

  signArr[pointA.y][pointA.x] = "A";
  signArr[pointB.y][pointB.x] = "Z";

  return calcArrayNums(pointA, pointB, signArr, pathArr);
};

const calcArrayNums = (
  pointA: Point,
  pointB: Point,
  arr: Array<Array<any>>,
  arrIds: Array<Array<Array<string>>>
): Path => {
  // console.log(counter);

  if (pointA.y < pointB.y)
    for (let i = 0; i < 9; i++)
      if (pointA.x < pointB.x)
        for (let j = 0; j < 9; j++) createPathNums({ i: i, j: j }, arr, arrIds);
      else
        for (let j = 8; j >= 0; j--)
          createPathNums({ i: i, j: j }, arr, arrIds);
  else
    for (let i = 8; i >= 0; i--)
      if (pointA.x < pointB.x)
        for (let j = 0; j < 9; j++) createPathNums({ i: i, j: j }, arr, arrIds);
      else
        for (let j = 8; j >= 0; j--)
          createPathNums({ i: i, j: j }, arr, arrIds);

  if (arrIds[pointB.y][pointB.x].length == 0)
    calcArrayNums(pointA, pointB, arr, arrIds);

  for (let i = 1; i < pathArr[pointB.y][pointB.x].length; i++)
    if (pathArr[pointB.y][pointB.x][0] == pathArr[pointB.y][pointB.x][i]) {
      pathArr[pointB.y][pointB.x] = pathArr[pointB.y][pointB.x].slice(0, i + 1);
      break;
    }

  const newPathArrays: Path = {
    pathNum: arr,
    pathIds: arrIds[pointB.y][pointB.x]
  };
  return newPathArrays;
};
const createPathNums = (
  index: ArrayIndex,
  arr: Array<Array<any>>,
  arrIds: Array<Array<Array<string>>>
): void => {
  if (arr[index.i][index.j] == "A")
    assignValues(1, { i: index.i, j: index.j }, arr, arrIds);
  // if (controlM) break;
  else if (arr[index.i][index.j] > 0)
    assignValues(
      arr[index.i][index.j] + 1,
      { i: index.i, j: index.j },
      arr,
      arrIds
    );
  // if (controlM) break;
};

const assignValues = (
  val: number,
  index: ArrayIndex,
  arr: Array<Array<any>>,
  arrIds: Array<Array<Array<string>>>
): void => {
  assignNewValue(val, index, arr, arrIds, { i: 1, j: 0 });
  assignNewValue(val, index, arr, arrIds, { i: -1, j: 0 });
  assignNewValue(val, index, arr, arrIds, { i: 0, j: 1 });
  assignNewValue(val, index, arr, arrIds, { i: 0, j: -1 });
};

const assignNewValue = (
  val: number,
  index: ArrayIndex,
  arr: Array<Array<any>>,
  arrIds: Array<Array<Array<string>>>,
  shift: ArrayIndex
): void => {
  try {
    if (
      arr[index.i - shift.i][index.j - shift.j] == 0 ||
      arr[index.i - shift.i][index.j - shift.j] == "Z"
    ) {
      if (arr[index.i - shift.i][index.j - shift.j] != "Z")
        arr[index.i - shift.i][index.j - shift.j] = val;
      if (arr[index.i][index.j] == "A")
        arrIds[index.i - shift.i][index.j - shift.j].push(
          `${index.j}_${index.i}`
        );
      else {
        // console.log(arrIds[index.i][index.j]);
        arrIds[index.i - shift.i][index.j - shift.j] = arrIds[
          index.i - shift.i
        ][index.j - shift.j].concat(arrIds[index.i][index.j]);
        arrIds[index.i - shift.i][index.j - shift.j].push(
          `${index.j}_${index.i}`
        );
      }
    }
    // if (arr[index.i - shift.i][index.j - shift.j] == "Z") controlM = true;
  } catch (err) {
    // console.log(err);
    // console.log(arr);
  }
};
