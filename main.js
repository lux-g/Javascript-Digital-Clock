const clock = document.querySelector('.clock');
const today = document.querySelector('.day');
const months = document.querySelector('.month');
const monthDate = document.querySelector('.month-date')

function currentTime() {
    const now = new Date();

    const hours = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const monthDay = now.getDate();
    const year = now.getFullYear();

    //Days
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = now.getDay();

    //Months
    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const currentMonth = now.getMonth();

    today.innerHTML = `${days[day]}`
    months.innerHTML = `${month[currentMonth]} ${monthDay}, ${year}`
    clock.innerHTML = `${hours} : ${min} : ${sec}`;
};

setInterval(currentTime, 1000);

