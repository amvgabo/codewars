//Instruction:

//Given an integer or a floating-point number, find its opposite.

//My solution:
function opposite(number) {
    if (number === Math.abs(number)) {
    return -Math.abs(number)
    } else {
    return Math.abs(number)
  }
  }