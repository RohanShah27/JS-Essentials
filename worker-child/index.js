const { Worker } = require("worker_threads");

//Create new worker
const worker = new Worker("./worker.js");

//Listen for a message from worker
worker.on("message", (result) => {
  console.log(
    `${result.num}th Fibonacci Number: ${result.fib} and the addition result is ${result.addition}`
  );
});

worker.on("error", (error) => {
  console.log(error);
});

worker.postMessage({
  num: 40,
  a: 1000000000000000000000000000000000000000000,
  b: 700000000000000000000000000000000000000000000000000000,
});
// worker.postMessage({ num: 102 });
