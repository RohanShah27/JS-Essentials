const fibo = (n) => {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  let fiboArray = [];
  for (var i = 0; i < n; i++) {
    fiboArray.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return fiboArray;
};

// console.log(fibo(10));
//Expected op 0, 1, 1, 2, 3, 5, 8, 13, 21,34

const flatten = (objData) => {
  let result = {};
  for (var key in objData) {
    if (typeof objData[key] === "object") {
      const tempData = flatten(objData[key]);
      for (var i in tempData) {
        result[`${key}.${i}`] = tempData[i];
      }
    } else {
      result[key] = objData[key];
    }
  }
  return result;
};

let inputData = {
  A: 2,
  B: 23,
  X: {
    P: 233,
    Z: {
      L: "Mewo",
    },
  },
};

// console.log(flatten(inputData), "flattened data");

const frequency = (list = "11222233422112") => {
  const numArray = list.split("");
  let result = [];
  let count = 1,
    index = 0;
  while (index < numArray.length) {
    if (numArray[index] === numArray[index + 1]) {
      count++;
    } else {
      result.push(`(${numArray[index]},${count})`);
      count = 1;
    }
    index++;
  }
  return result;
};
//Expected op ['(1,2)', '(2,4)','(3,2)', '(4,1)','(2,2)', '(1,2)','(2,1)']
// console.log(frequency());

const anagram = (word1, word2) => {
  if (word1.split("").sort().join("") === word2.split("").sort().join(""))
    return true;
  return false;
};

// console.log(anagram("rohan", "hanro"))
// expected op true

var bar = 1;

function foo() {
  return this.bar++;
}

const a = {
  bar: 10,
  foo1: foo,
  foo2: function () {
    return foo();
  },
};

// console.log(a.foo1.call());
// console.log(a.foo1());
// console.log(a.foo2.call());
// console.log(a.foo2());

// Promises

const testPromise = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "promise1");
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "promise2");
  });
  Promise.race([promise1, promise2]).then((val) => {
    // resolves both but returns the first one to resolve
    console.log(val, "Return value promise.race");
  });
  Promise.all([promise1, promise2]).then((val) => {
    // returns after all resolved
    console.log(val, "Return value promise.all");
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 600, "Reject Promise3");
  });
  Promise.allSettled([promise1, promise2, promise3]).then((val) => {
    // returns after all resolved along with status of each promise
    console.log(val, "Return value promise.allSettled");
  });
};
// testPromise();

//Promise chaining
const promiseAddition = (...args) => {
  const promise1 = new Promise((resolve, reject) => {
    try {
      if (args.length === 0) throw { message: "Empty input" };
      let sum = 0;
      sum = args.reduce((a, b) => {
        return a + b;
      });
      resolve(sum);
    } catch (err) {
      reject({ type: "Error", message: err.message });
    }
  });
  return promise1;
};
// promiseAddition()
//   .then((val) => {
//     console.log(val, "then val");
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

//Array methods

const arrayTest = () => {
  let a = [
    {
      name: "Mobile",
      variants: [
        {
          min: 100,
          max: 200,
        },
        { min: 50, max: 60 },
      ],
    },
    {
      name: "TV",
      variants: [
        {
          min: 200,
          max: 400,
        },
        { min: 22, max: 24 },
      ],
    },
  ];
  const mobile = a
    .map((ele, index) => {
      if (ele.name.toLocaleLowerCase() === "mobile") return ele;
    })
    // filter not undefined data
    .filter((a) => {
      return !!a;
    });
  // console.log(mobile, "Mobile filtered array");
  var variants = [];
  a.map((ele) => {
    ele.variants.map((data) => {
      variants.push(data);
    });
  });
  console.log(
    variants.sort((a, b) => {
      return a.min - b.min;
    }),
    "Sorted variants"
  );
};

// arrayTest();

// function prep

const moduleX = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = moduleX.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(moduleX);
// console.log(boundGetX());
// expected output: 42
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// console.log(max, "Max number");

function demoArrayCall(name, location) {
  this.name = name;
  this.location = location;
}

function modifiedCalled() {
  demoArrayCall.call(this, "Rohan", "dombivali");
  this.category = "House";
}

// console.log(new modifiedCalled());

function path(c, name, v, currentPath, t) {
  var currentPath = currentPath || "root";

  for (var i in c) {
    if (i == name && c[i] == v) {
      t = currentPath;
    } else if (typeof c[i] == "object") {
      return path(c[i], name, v, currentPath + "." + i);
    }
  }

  return t + "." + name;
}

// async function
async function addition() {
  return 1 + 1;
}

// addition().then((val) => {
//   console.log(val, "Value");
// });

function getUnique() {
  let a = [1, 1, 1, 2, 3, 2, 4, 5, 6, 7, 2];
  // return [...new Set(a)];
  return (
    a
      // .sort()
      .filter((element, index, array) => array.indexOf(element) === index)
  );
}

// console.log(getUnique());

const pattern = () => {
  for (var i = 1; i <= 5; i++) {
    console.log(" ".repeat(5 - i) + "*".repeat(i));
  }
};

// pattern();

const maxOccuring = () => {
  let myStr = "Rohan Shah";
  myStr = myStr.toLowerCase().replace(/ /g, "");
  var max = 0,
    maxChar = "";
  myStr.split("").forEach(function (char) {
    if (myStr.split(char).length > max) {
      max = myStr.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};

// console.log(maxOccuring());

// promisify setTimeout

const sleep = (ms) => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
  return promise1;
};

const testPromisify = async () => {
  console.log("started");
  await sleep(2000);
  console.log("after 2 seconds");
};

// testPromisify();

// shallow and deep copy
// let ab = {
//   a: 1,
//   b: 1,
// };
// let b = ab;
// b.c = 1;
// // console.log(ab, "Value of shallow copied a");

// let deepCopy1 = {
//   a: 1,
//   b: 1,
// };
// let deepCopy2 = { ...deepCopy1 };
// deepCopy2.c = 5;
// console.log(deepCopy1, "Deep copy ");

// prototype vs _prototype_

function prototypeTest() {
  function Foo() {
    this.method = () => {
      return "I am a method";
    };
  }
  Foo.prototype.myName = function () {
    return "My name is " + this.name;
  };
  Foo.prototype.name = "Rohan";
  let fooInstance = new Foo();
  // console.log(fooInstance.myName());
  // // now _prototype_
  // console.log(Foo); // nothing
  // console.log(fooInstance.__proto__, "Instance");
  // console.log(fooInstance.method(), "Method from instance");
}

prototypeTest();

// let demo = ["a", "b"];
// let demo1 = { a: 1, b: 90 };
// for (var l in demo1) {
//   console.log(demo1[l], "L");
// }

// var numbersdata = [4, 2, 5, 1, 3];
// numbersdata.sort((a, b) => {
//   return b - a;
// });
// console.log(numbersdata);

// two sum
const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    const diffIndex = array.indexOf(target - array[i]);
    if (diffIndex >= 0 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
  return [];
};

// console.log(twoSum([1, 3, 10, 11], 13));

// generator function example
function* passwordGenerator() {
  var dateTime = new Date().getUTCMilliseconds().toString();
  const appIn = "Rohan";
  while (true) {
    yield appIn + dateTime;
    dateTime = new Date().getUTCMilliseconds().toString();
  }
}

// const password = passwordGenerator();
// console.log(password.next()); // done false
// console.log(password.next()); // done false
// console.log(password.return("PasswordMagic")); // done true
// console.log(password.next()); // done true value undefined
// console.log(password.throw(new Error("I am an error")));

const restOperator = (a, ...arguments) => {
  let sum = 0;
  sum = arguments.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  console.log(sum + a, "Sum");
};

// restOperator(1, 2, 3, 4, 5);

const spreadDemo = () => {
  var obj = { name: "Rohan", lname: "Shah" };
  var employee = { ...obj, company: "SI" };
  employee.age = "24";
  // creating empty objs
  // var newObj = new Object({ id: "0" });
  var newObj = Object.create({});
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };
  target.d = "k";
  delete target.d;
  Object.assign(target, source);
  console.log(target, "Object");
};

// spreadDemo();
// unique number
function getUnique(...arguments) {
  return arguments
    .filter((value, index, array) => {
      return index === array.indexOf(value);
    })
    .sort().length;
}

// console.log(getUnique(1, 1, 3, 1, 4, 5, 6, 7, 3, 3, 2));

const findPath = (path) => {
  var value = {
    ...obj,
  };
  path.split(".").forEach((node) => {
    value = value ? value[node] : value;
  });
  return value;
};

var obj = {
  a: {
    b: {
      c: 12,
    },
  },
  findPath,
};

// console.log(obj.findPath("a.b.c"), "Expected 12");
// console.log(obj.findPath("a.b"), "Expected {c:12}");
// console.log(obj.findPath("a.b.d"), "Expected undefined");
// console.log(obj.findPath("a.c"), "Expected undefined");
// console.log(obj.findPath("a.b.c.d"), "Expected undefined");
// console.log(obj.findPath("a.b.c.d.e"), "Expected undefined");

const zeroLast = () => {
  let arr = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
  var norm = [];
  var zero = [];
  arr.forEach((num) => {
    if (num == 0) zero.push(num);
    else norm.push(num);
  });
  return norm.concat(zero);
};

// console.log(zeroLast())

// let x = "123";
// console.log(x, "Value of x");
// x = +x + 123;
// console.log(x, "post addition");
// console.log(x - parseInt("123post"), "Sub cohersion", parseFloat("123.02post"));

const parameterLess = (...arguments) => {
  console.log("hello", arguments);
};
function norm(...arguments) {
  console.log(arguments);
}
// norm(1, 2, 3);
// parameterLess(1, 2, 3);
