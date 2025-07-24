function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("stopwatch has already started");
    }
    running = true;
    startTime = new Date();
    //console.log(startTime);
  };
  this.stop = function () {
    if (!running) {
      throw new Error("stopwatch is not started");
    }
    running = false;
    stopTime = new Date();
    //console.log(stopTime);
    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    stopTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
// >sw.start()
// >sw.stop()
// >sw.duration()
// >sw.reset()
