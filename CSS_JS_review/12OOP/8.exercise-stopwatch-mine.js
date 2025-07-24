function Stopwatch() {
  let startTime,
    stopTime,
    duration = 0;

  this.start = function () {
    if (startTime) {
      throw new Error("start time exist!");
    }
    startTime = Date.now();
    //console.log(startTime);
  };
  this.stop = function () {
    if (stopTime || !startTime) {
      throw new Error("stop time exists!");
    }
    stopTime = Date.now();
    //console.log(stopTime);
  };
  this.duration = function () {
    if (!stopTime || !startTime) {
      throw new Error("Missing start time or stop time!");
    }
    duration = (stopTime - startTime) / 1000; //ms to m
    console.log(`duration:${duration}s`);
  };
  this.reset = function () {
    startTime = 0;
    stopTime = 0;
    duration = 0;
  };
}

const sw = new Stopwatch();
// >sw.start()
// >sw.stop()
// >sw.duration()
// >sw.reset()
