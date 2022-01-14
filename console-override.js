var logs = [];
(function () {
  var _log = console.log;
  var _error = console.error;
  var _warning = console.warn;
  console.log = (msg) => {
    logs.push(msg);
    _log.apply(console, arguments);
  };
  console.error = (msg) => {
    logs.push(msg);
    _error.apply(console, arguments);
  };
  console.warn = (msg) => {
    logs.push(msg);
    _warning.apply(console, arguments);
  };
})();

console.log("Console test");
console.log(logs);
