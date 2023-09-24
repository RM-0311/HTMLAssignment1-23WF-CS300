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
