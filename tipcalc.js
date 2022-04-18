function calculateTip() {
  let amount = document.getElementById("amount").value;
  let persons = document.getElementById("persons").value;
  let services = document.getElementById("services").value;

  console.log(services);
  if (amount === "" && service === "Select") {
    alert("Please enter valid values");
    return;
  }

  if (persons === "1") document.getElementById("each").style.display = "none";
  else document.getElementById("each").style.display = "block";

  let total = (amount * (services/100)) / persons;
  total = total.toFixed(2);

  document.querySelector(".tip").style.display = "block";
  document.getElementById("total").innerHTML = total;
}
window.onload = () => {
  document.getElementById("calculate").onclick = calculateTip;
};
