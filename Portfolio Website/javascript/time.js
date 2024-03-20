function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const timeString = `<p>${hours}:${minutes} ${ampm}</p>`;

    document.getElementById("time-widget").innerHTML = timeString;
}

setInterval(updateTime, 1000);