let seatElementArray = document.querySelectorAll(".seat");
let seatSelected = [];
for (let i = 0; i < seatElementArray.length; i++)
{
  const seatElement = seatElementArray[i];
  let selectSeat;
  seatElement.addEventListener("click", function () {
    selectSeat = seatElement.querySelector("p").innerHTML;
    if (!seatSelected.includes(selectSeat)) 
    {
      let seatNum = parseInt(getSelectedSeat());
      let availSeat = parseInt(getLeftSeats());
      let currentPrice = parseInt(getTotalPrice());
      let grandTotalPrice = parseInt(getGrandTotalPrice());
      if (seatNum < 4) {
        seatSelected.push(selectSeat);
        seatNum++;
        availSeat--;
        setSelectedSeat(seatNum);
        setLeftSeats(availSeat);
        seatElement.classList.remove("bg-[#F7F8F8]");
        seatElement.classList.add("bg-[#1DD100]");
        addElementOfSeats(selectSeat);
        currentPrice+=550;
        setTotalPrice(currentPrice);
        grandTotalPrice=currentPrice;
        setGrandTotalPrice(grandTotalPrice);
      } 
      else {
        alert("Seat Limit exceeded !!!");
      }
    } 
    else 
    {
      let seatNum = parseInt(getSelectedSeat());
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
  let seat = seats.innerHTML;
  return seat;
}
function setSelectedSeat(newSeat) {
  const seats = document.getElementById("seatSelected");
  seats.innerHTML = newSeat;
}
function getLeftSeats() {
  const seats = document.getElementById("seatAvail");
  let seat = seats.innerHTML;
  return seat;
}
function setLeftSeats(newAvailSeat) {
  const seats = document.getElementById("seatAvail");
  seats.innerHTML = newAvailSeat;
}
function addElementOfSeats(elements) {
    const elementDiv = document.getElementById("selectedTicketContainer");
    elementDiv.innerHTML += `<p>${elements}</p><p>Economic</p><p>550</p>`;
}
function getTotalPrice(){
    const price = document.getElementById("totalPrice").innerHTML;
    return price;
}
function setTotalPrice(price){
    const Newprice = document.getElementById("totalPrice");
    Newprice.innerHTML = price;
}
function getGrandTotalPrice(){
    const price = document.getElementById("grandTotalPrice").innerHTML;
    return price;
}
function setGrandTotalPrice(price){
    const Newprice = document.getElementById("grandTotalPrice");
    Newprice.innerHTML = price;
}
function checkForCoupon() {
    let grandTotalPrice = parseInt(getGrandTotalPrice());
    const coupon = document.getElementById("inputCoupon").value;
    console.log(coupon);
    if (coupon === "NEW15") {
        document.getElementById("labelInput").classList.add("hidden");
        grandTotalPrice -= grandTotalPrice * 0.15;
        setGrandTotalPrice(grandTotalPrice);
        document.getElementById("inputField").innerHTML=`<div role="alert" class="alert bg-[#1DD10026] alert-info">
        <span class=" text-[#1DD100] font-extrabold">Congratulations !!! "${coupon}" is applied.</span>
    </div>`;
    }
    else if(coupon === "Couple 20")
    {
        document.getElementById("labelInput").classList.add("hidden");
        grandTotalPrice -= grandTotalPrice * 0.20;
        setGrandTotalPrice(grandTotalPrice);
        document.getElementById("inputField").innerHTML=`<div role="alert" class="alert bg-[#1DD10026] alert-info">
        <span class=" text-[#1DD100] font-extrabold">Congratulations !!! "${coupon}" is applied.</span>
    </div>`;
    }
    else{
        document.getElementById("inputCoupon").value = "";
        alert("Coupon is incorrect !!!");
    }
}
document.getElementById("apply").addEventListener("click", function() {
    checkForCoupon();
});
document.getElementById("nextBtn").addEventListener("click", function(){
    let currentPrice = parseInt(getTotalPrice());
    if(currentPrice === 0)
    {
        alert("You didn't select any seats yet !!!");
    }
    else{
        my_modal_3.showModal();
    }
});
document.getElementById("continueLoad").addEventListener("click",function(){
    window.location.reload();
})
