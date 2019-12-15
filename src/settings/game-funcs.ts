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

export enum Colors {
  "red",
  "cyan",
  "green",
  "yellow",
  "violet",
  "orange",
  "pink"
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

export const calcPath = (pointA: Point, pointB: Point): Path => {
  signArr = [];
  pathArr = [];
  controlM = false;

  for (let i = 0; i < 9; i++) signArr.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  for (let i = 0; i < 9; i++) {
    pathArr.push([]);
    for (let j = 0; j < 9; j++) pathArr[i].push([]);
  }

  signArr[pointA.y][pointA.x] = "S";
  // pathArr[pointA.y][pointA.x].push(`${pointA.y}_${pointA.x}`);
  signArr[pointB.y][pointB.x] = "M";

  if (pointA.y < pointB.y) {
    for (let i = 0; i < 9; i++) {
      if (pointA.x < pointB.x)
        for (let j = 0; j < 9; j++)
          createPathNums({ i: i, j: j }, signArr, pathArr);
      else
        for (let j = 8; j >= 0; j--)
          createPathNums({ i: i, j: j }, signArr, pathArr);
      if (controlM) break;
    }
  } else {
    for (let i = 8; i >= 0; i--) {
      if (pointA.x < pointB.x)
        for (let j = 0; j < 9; j++)
          createPathNums({ i: i, j: j }, signArr, pathArr);
      else
        for (let j = 8; j >= 0; j--)
          createPathNums({ i: i, j: j }, signArr, pathArr);
      if (controlM) break;
    }
  }
  const newPathArrays: Path = {
    pathNum: signArr,
    pathIds: pathArr[pointB.y][pointB.x]
  };
  return newPathArrays;
};

const createPathNums = (
  index: ArrayIndex,
  arr: Array<Array<any>>,
  arrIds: Array<Array<Array<string>>>
): void => {
  if (arr[index.i][index.j] == "S")
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
      arr[index.i - shift.i][index.j - shift.j] == "M"
    ) {
      if (arr[index.i - shift.i][index.j - shift.j] != "M")
        arr[index.i - shift.i][index.j - shift.j] = val;
      if (arr[index.i][index.j] == "S")
        arrIds[index.i - shift.i][index.j - shift.j].push(
          `${index.j}_${index.i}`
        );
      else {
        console.log(arrIds[index.i][index.j]);
        arrIds[index.i - shift.i][index.j - shift.j] = arrIds[
          index.i - shift.i
        ][index.j - shift.j].concat(arrIds[index.i][index.j]);
        arrIds[index.i - shift.i][index.j - shift.j].push(
          `${index.j}_${index.i}`
        );
      }
    }
    if (arr[index.i - shift.i][index.j - shift.j] == "M") controlM = true;
  } catch (err) {
    console.log(err);
    console.log(arr);
  }
};
