// 1.  Example of using Async/await
function delayFn(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
async function delayGreet(name) {
  await delayFn(2000); //await the execution of the delayFn, then go to the next line
  console.log(`Hello, ${name}`);
}
delayGreet("Mary");

// 2. Example of using try/catch in Async/await
async function division(num1, num2) {
  try {
    if (num2 === 0) throw new Error("cannot devide by 0");
    return num1 / num2;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

async function mainFn() {
  console.log(await division(10, 2));
  console.log(await division(10, 0));
}
mainFn();
