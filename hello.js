let money, time;

function start() {
    money = +prompt("Your budget a month", ''),
    time = prompt("Add date in format YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Your budget a month", '');
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {

        for (let i = 0; i < 2; i++) {
            let a = prompt("Add responsible state of costs for this month", "Type here...");
                b = prompt("How much it costs", "You can type here...");
        
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
                console.log("done");            
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
            
        }
    },
    detectDailyBudget: function() {
        
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Daily budget: " + appData.moneyPerDay);

    },
    detectLevel: function() {

        if (appData.moneyPerDay < 100) {
            console.log("MInimal level");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Medium level");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Really good level");
        } else {
            console.log("Try again. Error!");
        }

    },
    checkSavings: function() {

        if (appData.savings == true) {
            let save = +prompt("What is the sum of your savings per year?");
            percent = +prompt("What is the percent?");
    
            appData.monthIncome = save / 100 / 12*percent;
            alert("Your monthly savings income: " + appData.monthIncome);
        }

    },
    chooseOptExpenses: function() {

        for (let i = 1; i < 3; i++) {
            let opt = prompt("State of optional expenses:", "");
            appData.optionalExpenses[i] = opt;            
        }

    },
    chooseIncome: function() {

        let items = prompt("What is going to bring you income ? [Write with comma and space (..., ...)]', ");
        appData.income = items.split(', ');
        appData.income.push(prompt("Maybe something else?"));
        appData.income.sort();
    }
};