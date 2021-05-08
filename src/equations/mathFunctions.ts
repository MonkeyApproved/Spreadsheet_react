interface Collection {
  [key: string]: any;
}

function twoArgFunc(x: number, y: number, func: (x: number, y: number) => number): number;
function twoArgFunc(x: number[], y: number, func: (x: number, y: number) => number): number[];
function twoArgFunc(x: number, y: number[], func: (x: number, y: number) => number): number[];
function twoArgFunc(x: number[], y: number[], func: (x: number, y: number) => number): number[];
function twoArgFunc(x: any, y: any, func: any): any {
  if (typeof x === 'number' && typeof y === 'number') {
    if (isNaN(x) || isNaN(y)) {
      return NaN;
    } else {
      return func(x, y);
    }
  } else if (typeof x === 'object' && typeof y === 'number') {
    return x.map((xi: number) => twoArgFunc(xi, y, func));
  } else if (typeof x === 'number' && typeof y === 'object') {
    return y.map((yi: number) => twoArgFunc(x, yi, func));
  } else if (typeof x === 'object' && typeof y === 'object') {
    if (x.length !== y.length) {
      return `dimensions do not match`;
    } else {
      return x.map((xi: number, i: number) => twoArgFunc(xi, y[i], func));
    }
  } else {
    return 'function called with non-numeric value';
  }
}

function oneArgFunc(x: number, func: (x: number) => number): number;
function oneArgFunc(x: number[], func: (x: number) => number): number[];
function oneArgFunc(x: any, func: any): any {
  if (isNaN(x)) {
    return NaN;
  } else if (typeof x === 'number') {
    return func(x);
  } else if (typeof x === 'object') {
    return x.map((xi: number) => oneArgFunc(xi, func));
  } else {
    return 'unknown data type in evaluation function';
  }
}

const flatten = (...args: any[]): any => {
  const len = args.length;
  const list = [];
  for (let i = 0; i < len; i++) {
    if (typeof args[i] === 'number' || typeof args[i] === 'string') {
      list.push(args[i]);
    } else if (Array.isArray(args[i])) {
      list.push(...args[i]);
    } else {
      return 'unknown data types in evaluation function';
    }
  }
  return list;
};

const array = (...args: any[]) => {
  return [...args];
};

const part = (array: any[], n: number): any => {
  if (n > array.length) {
    return `index out of range (index: ${n}, array: ${array.length})`;
  } else if (n === 0) {
    return 'index 0 is invalid (start at 1)';
  } else if (n < 0) {
    return array[array.length + n];
  } else {
    return array[n - 1];
  }
};

const add = (...args: any[]) => {
  const len = args.length;
  const func = (x: any, y: any) => x + y;
  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return args[0];
  } else {
    return args.reduce((ac, xi) => twoArgFunc(ac, xi, func));
  }
};

const sub = (...args: any[]) => {
  const len = args.length;
  const func = (x: any, y: any) => x - y;
  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return args[0];
  } else {
    return args.reduce((ac, xi) => twoArgFunc(ac, xi, func));
  }
};

const mul = (...args: any[]) => {
  const len = args.length;
  const func = (x: any, y: any) => x * y;
  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return args[0];
  } else {
    return args.reduce((ac, xi) => twoArgFunc(ac, xi, func));
  }
};

const div = (...args: any[]) => {
  const len = args.length;
  const func = (x: any, y: any) => x / y;
  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return args[0];
  } else {
    return args.reduce((ac, xi) => twoArgFunc(ac, xi, func));
  }
};

const sin = (arg: any) => {
  return oneArgFunc(arg, () => Math.sin(arg));
};

const mathFunctions: Collection = {
  flatten: flatten,
  array: array,
  part: part,
  add: add,
  sub: sub,
  mul: mul,
  div: div,
  sin: sin,
};

export default mathFunctions;
