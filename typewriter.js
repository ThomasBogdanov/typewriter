const sentence = "hello there from lighthouse labs";
let x = 1000
for (const char of sentence) {
    x = x + 50
    setTimeout(() => {
        process.stdout.write(char) }, x )
  }

setTimeout(() => {
    console.log() }, x);
  