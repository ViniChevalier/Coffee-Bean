/* Store hours */
/*Get days of the week */
const storeHours = {
    mon: { opens: "09:00", closes: "18:00" },
    tue: { opens: "09:00", closes: "18:00" },
    wed: { opens: "09:00", closes: "18:00" },
    thu: { opens: "09:00", closes: "18:00" },
    fri: { opens: "09:00", closes: "20:00" },
    sat: { opens: "10:00", closes: "16:00" },
    sun: null,
};

/*Get day of week (today) and time (now) to set day and time  */
function displayStoreHours() {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = days[new Date().getDay()];
    const hoursContainer = document.getElementById("time");
    const statusElement = document.getElementById("status");

    let status = "Closed";
    let statusClass = "status-closed";

    days.forEach(day => {
        const hour = storeHours[day];
        const li = document.createElement("li");
        li.textContent = hour
            ? `${day.toUpperCase()}: ${hour.opens} - ${hour.closes}`
            : `${day.toUpperCase()}: Closed`;

            /*Emphasise today = day of week  */
        if (day === today) {
            li.classList.add("today");

            if (hour) {
                const now = new Date();
                const [openHour, openMinute] = hour.opens.split(":").map(Number);
                const [closeHour, closeMinute] = hour.closes.split(":").map(Number);
                const opensAt = new Date();
                opensAt.setHours(openHour, openMinute, 0);
                const closesAt = new Date();
                closesAt.setHours(closeHour, closeMinute, 0);

                /*Show the status of the shopping */
                if (now >= opensAt && now <= closesAt) {
                    status = "Open";
                    statusClass = "status-open";
                }
            }
        }

        hoursContainer.appendChild(li);
    });

    statusElement.textContent = status;
    statusElement.className = statusClass;
}
    window.onload = displayStoreHours;

