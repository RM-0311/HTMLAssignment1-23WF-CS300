$(document).ready(function () {
  // Initially hide the investment details
  $('#investment-details').hide();

  // Toggle visibility of the investment details
  $('#toggle-investment').click(function () {
    $('#investment-details').slideToggle();
    var buttonText = $('#toggle-investment').text();
    $('#toggle-investment').text(
      buttonText === 'Read More' ? 'Read Less' : 'Read More'
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const initialInvestmentInput = document.getElementById("initial-investment");
  const revenueInput = document.getElementById("revenue");
  const expensesInput = document.getElementById("expenses");
  const calculateButton = document.getElementById("calculate-button");
  const roiResult = document.getElementById("roi-result");

  calculateButton.addEventListener("click", function () {
      // Get input values
      const initialInvestment = parseFloat(initialInvestmentInput.value);
      const revenue = parseFloat(revenueInput.value);
      const expenses = parseFloat(expensesInput.value);

      // Check for valid inputs
      if (isNaN(initialInvestment) || isNaN(revenue) || isNaN(expenses)) {
          roiResult.textContent = "Please enter valid numbers for all fields.";
          return;
      }

      // Calculate ROI
      const roi = ((revenue - expenses - initialInvestment) / initialInvestment) * 100;

      // Display the result rounded to two decimal places
      roiResult.textContent = `ROI: ${roi.toFixed(2)}%`;
  });
});
