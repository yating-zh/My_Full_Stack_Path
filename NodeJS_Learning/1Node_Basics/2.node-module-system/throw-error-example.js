try {
  throw new Error("invilid input/error message");
} catch (error) {
  //catch 被throw出来的error object
  console.error("error:", error.message);
}
