function calculatePercentage() {
  let value = document.getElementById("value").value;
  let percentage = document.getElementById("percentage").value;
  let result;

  value = parseInt(value);
  percentage = parseInt(percentage);

  result = (value * percentage) / 100;
  document.getElementById(
    "result"
  ).innerHTML = `${percentage}% of ${value} is ${result}`;

  if (isNaN(result)) {
    document.getElementById("result").innerHTML = "THE RESULT WILL APPEAR HERE";
  }
}
