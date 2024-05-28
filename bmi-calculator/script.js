//  this is an example of pseudocode
//  pseudocode is a way of planning out your code before you write it

// BMI calculator web app
// BMI is calculated by dividing a person's weight in kilograms by the square of his/her height in meters
// BMI = kg/m^2
// BMI = kg/m/m
// BMI = kg/(m*m)

// category	BMI (kg/m2)
// 1. Very severely underweight	< 15
// 2. Severely underweight	< 16
// 3. Underweight	< 18.5
// 4. Normal (healthy weight)	18.5 - 25
// 5. Overweight	25 - 30
// 6. Obese Class I (Moderately obese)	30 - 35
// 7. Obese Class II (Severely obese)	35 - 40
// 8. Obese Class III (Very severely obese)	> 40

// how our app will work:
// input user for weight in kilograms
// input user for height in meters
// calculate BMI based on user input (weight and height) when user click the button
// display BMI at h2 with id="bmiValue" by execute the calculation when user click the button
// display BMI category at h2 with id="bmiCategory" by using if else statement

const button = document.querySelector("#button");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const bmiCategory = document.querySelector("#bmiCategory");
const bmiValue = document.querySelector("#bmiValue");

weight.addEventListener("input" , function (e) {
    console.log(e.target.value);
});

height.addEventListener("input" , function (e) {
    console.log(e.target.value);
});

button.addEventListener("click", function () {
    console.log("Button clicked");

const weight = weightInput.value;
const height = heightInput.value / 100;

let bmi = (weight / (height*height)); 
    if (bmi < 15) {
        category = "Very severely underweight"; 
    } else if (bmi >= 15 && bmi < 16) {
        category = "Severely underweight";; 
    } else if (bmi >= 16 && bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >=18.5 && bmi < 25) {
        category ="Normal (healthy weight)"
    } else if (bmi >=25 && bmi < 30) {
        category ="Overweight"
    } else if (bmi >=30 && bmi < 35) {
        category ="Obese Class I (Moderately obese)"
    } else if (bmi >= 35 && bmi < 40) {
        category = "Obese Class II (Severely obese)";
    } else {
        category = "Obese Class III (Very severely obese)";
    } 
    console.log(bmi);

const roundedBmi = Math.round(bmi * 100) / 100;
console.log(roundedBmi);
bmiCategory.innerText = category; 
bmiValue.innerText = roundedBmi;
});

