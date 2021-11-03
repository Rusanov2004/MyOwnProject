let money = +prompt("Your budget a month"),
    time = prompt("Add date in format YYYY-MM-DD");

let answer = prompt("Add responsible state of costs for this month", "Type here...");
let answer2 = prompt("How much it costs", "You can type here...");


var appData = {
    budget: money,
    timeData: time,
    expenses: {
        answer : answer2
    },
    optionalExpenses: {},
    income: [],
    savings: true
}

alert(appData.budget / 30);
