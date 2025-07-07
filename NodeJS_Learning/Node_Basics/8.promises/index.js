//1. Example to create Promise
function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Promice demo run now----");
delayFn(2000).then(() => console.log("after 2 seconds, promise resolved"));
console.log("end");

//2.Example to catch error in Promise. this is also the common format of using promise
function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("cannot perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}
divideFn(10, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
