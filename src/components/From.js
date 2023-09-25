import React, { useState } from 'react'
import ForminputGroup from './ForminputGroup'
import {FaDollarSign} from "react-icons/fa";

function From() {

  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function calculateLoanAmount(){
  setLoanPayment(homeValue - downPayment);
  return loanAmount;
}

function calculateMonthlyPayment(){
function percentageToDecimal(percent){
  return percent / 12 / 100;
}

function yearsToMonths(year){
  return year * 12;
}

setMonthlyPayment(
  (percentageToDecimal(interestRate) * loanAmount) /
  (1-
    Math.pow(
      1+ percentageToDecimal(interestRate), 
      - yearsToMonths(loanDuration)
    ))
);

return monthlyPayment;
}

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <ForminputGroup
        text="Home Value" icon={<FaDollarSign/>} 
        placeholder ="Enter the value of  the home"
        onkeyup={calculateLoanAmount}
        value={homeValue}
        onInput={(e)=> setHomeValue(e.target.value)}
        />
        {" "}

        <ForminputGroup text="Down Payment" 
        icon={<FaDollarSign/>} 
        placeholder ="Enter your funds"
        onkeyup={calculateLoanAmount}
        value={downPayment}
        onInput={(e)=> setDownPayment(e.target.value)}
        />
        {" "}

        <ForminputGroup text="Loan Amount" 
        icon={<FaDollarSign/>} 
        placeholder ="Funds needed" 
        readOnly={true}
        value={loanAmount}
        />
        <ForminputGroup text="Interest Rate %" 
        placeholder ="Enter your interest rate"
        value={interestRate}
        onInput={(e)=> setInterestRate(e.target.value)}
        />{" "}
        
        
        <ForminputGroup text="Loan Duration (years)"
        placeholder ="Enter the duration of your loan in years"
        value={loanDuration}
        onInput={(e)=> setLoanDuration(e.target.value)}
        />{" "}

        <h4 className="alert alert-info fw-bold">
          Monthly payment: <FaDollarSign />
          {parseFloat(monthlyPayment.toFixed(2))}
          </h4>

        <button
        type="submit" 
        className="btn btn-primary btn-lg w-100 center" 
        onClick={calculateMonthlyPayment}
        > 
        {" "}
        Calculate
        </button> 
      
    </form>
  )
}

export default From
