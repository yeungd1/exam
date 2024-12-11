/* Execute the function to run and display the countdown clock */
// runClock();
// Update the count down every 1 second
runClock();
setInterval("runClock()", 1000);


function runClock() {

  // Get today's date and time
  var now = new Date();

  // Find the distance between now and the count down date
  var distance = now;


  // Time calculations for days, hours, minutes and seconds
  var days = now.getDate();
  var month = now.getMonth() +1;
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();


  document.getElementById("day").innerHTML= days.toString() + "/" + month.toString() + "/" + year.toString() + " at " + hours.toString() + ":" + minutes.toString();
}

var total_plays = 0;
var total_win = 0;
var total_loses = 0;


function rollDice() {

    let x = Math.floor((Math.random() * 6) + 1);

    if (x == 1)
        document.getElementById("dice_1").src = "dice-1.svg";
    if (x == 2)
        document.getElementById("dice_1").src = "dice-2.svg";
    if (x == 3)
        document.getElementById("dice_1").src = "dice-3.svg";
    if (x == 4)
        document.getElementById("dice_1").src = "dice-4.svg";
    if (x == 5)
        document.getElementById("dice_1").src = "dice-5.svg";
    if (x == 6)
        document.getElementById("dice_1").src = "dice-6.svg";

     let y = Math.floor((Math.random() * 6) + 1);

    if (y == 1)
        document.getElementById("dice_2").src = "dice-1.svg";
    if (y == 2)
        document.getElementById("dice_2").src = "dice-2.svg";
    if (y == 3)
        document.getElementById("dice_2").src = "dice-3.svg";
    if (y == 4)
        document.getElementById("dice_2").src = "dice-4.svg";
    if (y == 5)
        document.getElementById("dice_2").src = "dice-5.svg";
    if (y == 6)
        document.getElementById("dice_2").src = "dice-6.svg";

    total_plays++;

    if ( x + y >= 8)
    {
        total_win++;
        document.getElementById("message_text").innerHTML = "You Win: Try Again!";
    }
    else
    {
        total_loses++;
        document.getElementById("message_text").innerHTML = "You didn't win: Try Again!";
    }

    document.getElementById("total").innerText = total_plays;
}