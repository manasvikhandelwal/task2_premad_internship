function calculateEMI() {
    var principal = parseFloat(document.getElementById("principal").value);
    var tenure = parseInt(document.getElementById("tenure").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
  
   
    interestRate = interestRate / 100;
  
   
    var monthlyInterestRate = interestRate / 12;
  
   
    var numInstallments = tenure * 12;
  
   
    var denominator = Math.pow(1 + monthlyInterestRate, numInstallments);
  
        var emi = (principal * monthlyInterestRate * denominator) / (denominator - 1);
  
    
    document.getElementById("result").innerHTML = "The monthly EMI is: " + emi.toFixed(2);
  }