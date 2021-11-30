const input = process.argv.slice(2); // Remove the extra printed stuff on terminal

const reverse = function(string) {
  let output = " ";
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
};

console.log(reverse(`${input} `)); // Takes the input from terminal and then passes it through the reverse function