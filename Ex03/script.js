// /Coding Challenge #3
function calcBMI(mass, height) {
    BMI = mass / (height * height);
    return BMI;
}
BMI_John = calcBMI(78, 1.69);
BMI_Mark = calcBMI(92, 1.95);

function checkBMI(BMI_John, BMI_Mark) {
    if (BMI_John > BMI_Mark) {
        console.log("John's BMI" + BMI_John + " is higher than Mark's" + BMI_Mark);
    } else if (BMI_John < BMI_Mark) {
        console.log("Mark's BMI" + BMI_Mark + " is higher than John's" + BMI_John);
    } else
        console.log("Mark's BMI" + BMI_Mark + "=" + BMI_John);

}

checkBMI(BMI_John, BMI_Mark);