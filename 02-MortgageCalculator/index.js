function outputPayment (){

var numberOfPayments = $("#loanTerm").val() * $("#period").val();

var monthlyInterestRate = ($("#interestRate").val() / 100) / $("#period").val();

var compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

var interestQuotient = (monthlyInterestRate * compoundedIntestRate) / (compoundedIntestRate - 1);

// final calculation monthlyPayment = loanBalance * interestQuotient;
var result = $("#balance").val() * interestQuotient;

return $("#outField").html(result)
}