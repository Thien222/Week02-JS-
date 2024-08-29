//JS Fundamentals-Part2//
//Coding Challenge #2 //
function calcTip(bill_value) {
    if (bill_value >= 50 && bill_value <= 300) {
        return bill_value + bill_value * 0.15;
    } else {
        return bill_value + bill_value * 0.2;
    }
}

console.log('If bill_value is 125 else total_bill is :  ', calcTip(125));
console.log('If bill_value is 555 else total_bill is :  ', calcTip(555));
console.log('If bill_value is 44 else total_bill is :  ', calcTip(44));