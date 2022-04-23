"use strict"

const range = document.querySelector(".range");
const rangeValue = document.querySelector(".rangeValue");
const rangeYear = document.querySelector(".rangeYear");
const years = document.querySelector(".years");
const interestRate = document.querySelector(".rate").textContent = 22.9;
const repayment = document.querySelector('.repayment');
const totalRepayable = document.querySelector(".totalRepayable");
const totalInterest = document.querySelector(".totalInterest");

// global
rangeValue.textContent = `£${range.value}`;
years.textContent = `${rangeYear.value} years `;



range.addEventListener("input",function(){ 
    rangeValue.innerHTML = `£${range.value} `;
    loan_calculator(range, rangeYear, interestRate);
    
});

function loan_calculator(range, rangeYear, interestRate){
     const borrowAmount = range.value;
     const monthly = rangeYear.value * 12;
     const interestRate_r = (interestRate/100)/12;
     const discount_factor = (((1+interestRate_r) ** monthly)-1) / (interestRate_r*((1+interestRate_r)**monthly))
     const payment_monthly = (borrowAmount/discount_factor).toFixed(2);
     const payment_monthly_format = payment_monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
     repayment.innerHTML= `£${payment_monthly_format}`;

    //  totalRepayable
    const totalRepayable_calcu = (payment_monthly * monthly).toFixed(2);
    const totalRepayable_format = totalRepayable_calcu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalRepayable.innerHTML = `£${totalRepayable_format}`;

    //  totalInterest
    const totalInterest_calcu = (totalRepayable_calcu - borrowAmount).toFixed(2);
    const totalInterest_format = totalInterest_calcu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalInterest.innerHTML = `£${totalInterest_format}`;
}

loan_calculator(range, rangeYear, interestRate);

// late
rangeYear.addEventListener("input",function(){ 
    const whatYear = (rangeYear.value == 1) ? "year" : "years";
    years.innerHTML = `${rangeYear.value} ${whatYear} `;
    loan_calculator(range, rangeYear, interestRate);
  
});