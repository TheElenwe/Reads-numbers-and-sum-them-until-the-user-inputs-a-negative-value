var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var recursiveAsyncReadLine = function () {
  rl.question("Give number : ", function (answer) {
    total=0;
    for (i = 0; i <answer; i++) 
    total = total + (i + 1);
  
    
    if (answer < 0)
      //we need some base case, for recursion

      return rl.close(); //closing RL and returning from function.

    console.log(`The sum is : ${answer} ${total}`);
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow
