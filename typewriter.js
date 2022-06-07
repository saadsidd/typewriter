// Print a sentence with delays between each character
let sentence = 'hello there from lighthouse labs';
sentence += '\n';

let timerDelay = 0;

for (const char of sentence) {
  timerDelay += 100;

  setTimeout(() => {
    process.stdout.write(char);
  }, timerDelay);
}