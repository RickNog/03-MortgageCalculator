
var period = [
  ['Monthly', 12],
  ['Bimonthly', 6],
];

for (var i = 0; i < period.length; i++){
  $('<option/>').val(period[i][1]).html(period[i][0]).appendTo('#periodList');
}


// This function takes the id's "planets" and "weight" and multiplies them providing the result.
$(document).ready(function() {
  $(".button").on("click", function() {
    var loanBal = $("#loanBal").val();
    var intRate = $("#intRate").val();
    var loanTerm = $("#loanTerm").val();
    var period = $("#periodList").val();

    var numPayments = intRate * period;
    var monthIntRate = (intRate / 100) / period;
    var compIntRate = Math.pow((1 + monthIntRate), numPayments);
    var intQuotient = (monthIntRate * compIntRate) / (compIntRate - 1)
    var monthlyPayment = loanBal * intQuotient;

    monthlyPayment = monthlyPayment.toFixed(2);
    $("#displayResult").html("Your monthly mortgage payment is " + monthlyPayment);
  })
});