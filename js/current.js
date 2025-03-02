function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toDateString(); 
    const formattedTime = now.toLocaleTimeString(); 
    document.getElementById("curenttime_date").innerHTML = `${formattedDate} <br> ${formattedTime}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();
