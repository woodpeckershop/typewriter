const sentence = "hello there from lighthouse labs";
let delay = 1000;
for (const char of sentence) {
  setTimeout(()=>{process.stdout.write(char);},delay)
  delay += 50
}
setTimeout(()=>{process.stdout.write('\n');},delay)