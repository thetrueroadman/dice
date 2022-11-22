function roll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
let rollbtn = document.getElementById("rollbtn");
rollbtn.addEventListener("click", e => {
  let number = document.getElementById("diceAmount").value;
  let sides = document.getElementById("diceSides").value;
  let out = "";
  let total = 0;

  if (number > 256 || number < 1) {
    out += "Invalid number of dice!";
  } else {
    for (let i = 0; i < number; i++) {
      let result = roll(sides);
      out += `<p>You rolled a ${result}</p>`;
      total += result;
    }
  }

  let average = `Average: ${total / number}`;

  let totalOut = `Total: ${total}`;

  document.getElementById("output").innerHTML = out;
  document.getElementById("total").innerHTML = totalOut;
  document.getElementById("average").innerHTML = average;
})
