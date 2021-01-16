const prompt = require("prompt-sync")({ sigint: true });

sum = 0;
entry = Number(prompt("give me number"));
while (entry >= 0) {
  sum += entry;
  entry = Number(prompt("give me number"));
}
console.log(`The sum is: ${sum}`);
