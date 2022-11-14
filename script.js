function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

let rollbtn = document.getElementById("rollbtn");
rollbtn.addEventListener("click", e => {
  let result = roll();
  document.getElementById("output").innerHTML = `You rolled a ${result}`;
})
