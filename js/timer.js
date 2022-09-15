window.onload = clockNDate;
function clockNDate() {
  const months = [
    "January",
    "Fabuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let sec = date.getSeconds();
  let data = date.getDate();
  let parWithDate = document.getElementById("clockNDate");
  if (minute >= 0 && minute < 10) {
    minute = "0" + minute;
  }
  if (sec >= 0 && sec < 10) {
    sec = "0" + sec;
  }
  if (hour >= 0 && hour < 10) {
    hour = "0" + hour;
  }
  if (data >= 0 && data < 10) {
    data = "0" + data;
  }
  parWithDate.innerHTML =
    " " +
    hour +
    " : " +
    minute +
    " : " +
    sec +
    "<br>" +
    data +
    " " +
    months[month] +
    " " +
    year +
    " " +
    days[day];
  setInterval(clockNDate, 1000);
}
