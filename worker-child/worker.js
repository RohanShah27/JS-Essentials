const { parentPort } = require("worker_threads");
parentPort.on("message", (data) => {
  parentPort.postMessage({
    num: data.num,
    fib: getFib(data.num),
    addition: add(data.a, data.b),
  });
});
parentPort.on("messageerror", (data) => {
  parentPort.postMessage("error");
});
function getFib(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return getFib(num - 1) + getFib(num - 2);
  }
}

function add(a, b) {
  return a + b;
}
