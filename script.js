var seatElementArray = document.querySelectorAll(".seat");
var seatSelected = [];
for (let i = 0; i < seatElementArray.length; i++) {
  const seatElement = seatElementArray[i];
  var selectSeat;
  seatElement.addEventListener("click", function () {
    selectSeat = seatElement.querySelector("p").innerHTML;
    if (!seatSelected.includes(selectSeat)) {
      var seatNum = parseInt(getSelectedSeat());
      var availSeat = parseInt(getLeftSeats());
      if (seatNum < 4) {
        seatSelected.push(selectSeat);
        seatNum++;
        availSeat--;
        setSelectedSeat(seatNum);
        setLeftSeats(availSeat);
        seatElement.classList.remove("bg-[#F7F8F8]");
        seatElement.classList.add("bg-[#1DD100]");
      } else {
        alert("Seat Limit exceeded !!!");
      }
    } else {
      var seatNum = parseInt(getSelectedSeat());
      if (seatNum > 4) {
        alert("Seat Limit exceeded !!!");
      } else {
        alert("You already selected the seat !!!");
      }
    }
  });
}
function getSelectedSeat() {
  const seats = document.getElementById("seatSelected");
  var seat = seats.innerHTML;
  return seat;
}
function setSelectedSeat(newSeat) {
  const seats = document.getElementById("seatSelected");
  seats.innerHTML = newSeat;
}
function getLeftSeats() {
  const seats = document.getElementById("seatAvail");
  var seat = seats.innerHTML;
  return seat;
}
function setLeftSeats(newAvailSeat) {
  const seats = document.getElementById("seatAvail");
  seats.innerHTML = newAvailSeat;
}
