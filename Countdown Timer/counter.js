let getDateBtn = document.querySelector('.date')
let daysElement = document.querySelector('.days')
let hoursElement = document.querySelector('.hours')
let minutesElement = document.querySelector('.minutes')
let secondsElement = document.querySelector('.seconds')
let dateInput = document.getElementById("userDate");


getDateBtn.onclick = () => {
    const selectedDate = dateInput.value;

    if (selectedDate) {

        let countDown = new Date(selectedDate).getTime()

        let counter = setInterval(() => {

            let dateNow = new Date().getTime()

            let dataDiff = countDown - dateNow;

            let days = Math.floor(dataDiff / 1000 / 60 / 60 / 24);
            daysElement.innerHTML = days < 10 ? `0${days}` : days;

            let hours = Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
            hoursElement.innerHTML = hours < 10 ? `0${hours}` : hours;

            let minutes = Math.floor((dataDiff % (1000 * 60 * 60)) / (1000 * 60))
            minutesElement.innerHTML = minutes < 10 ? `0${minutes}` : minutes;

            let seconds = Math.floor((dataDiff % (1000 * 60)) / (1000))
            secondsElement.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

            if (dataDiff <= 0) {
                clearInterval(counter)
            }

        }, 1000);

        console.log(countDown);

    } else {
        alert("Please select a date.");
    }
}




