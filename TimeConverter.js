let hourInput = document.getElementById("hoursInput");
let buttonn = document.getElementById("convertBtn");
let minuteInput = document.getElementById("minutesInput");
let para = document.getElementById("errorMsg");
let para1 = document.getElementById("timeInSeconds");

buttonn.addEventListener("click", function() {
    let hourVal = parseInt(hourInput.value);
    let minuteVal = parseInt(minuteInput.value);

    let result = hourVal * 3600 + minuteVal * 60;
    if (hourVal && minuteVal) {
        para1.textContent = result + " s";
        para1.style.color = "#ffffff";
    }
    if (isNaN(hourVal)) {
        para.textContent = "Please enter a valid number of hours.";
        para.style.color = "#f7faf5";

    } else if (isNaN(minuteVal)) {
        para.textContent = "Please enter a valid number of minutes.";
        para.style.color = "#f7faf5";
    }


});