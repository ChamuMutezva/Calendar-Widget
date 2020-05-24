const currentMonth = document.querySelector("#currentMonth");
const currentDate = document.querySelector("#currentDate");
const today = new Date();
const month = today.getMonth();
const newDate = today.getDate();
let fullMonth = "";
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(currentMonth);
console.log(currentDate);
switch (month) {
    case 0:
        fullMonth = "January"
        break;

    case 1:
        fullMonth = "February"
        break;

        case 2:
        fullMonth = "March"
        break;

        case 3:
        fullMonth = "April"
        break;

        case 4:
        fullMonth = "May"
        break;

        case 5:
        fullMonth = "June"
        break;

        case 6:
        fullMonth = "July"
        break;

        case 7:
        fullMonth = "August"
        break;

        case 8:
        fullMonth = "September"
        break;

        case 9:
        fullMonth = "October"
        break;

        case 10:
        fullMonth = "November"
        break;

    default:
        fullMonth = "December"
        break;
}
currentMonth.innerHTML = fullMonth;
currentDate.innerHTML = newDate.toLocaleString();