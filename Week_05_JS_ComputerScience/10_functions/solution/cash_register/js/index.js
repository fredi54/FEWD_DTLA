$(document).ready(readyFunction);

function readyFunction() {

	var total = 0;

	$('#entry').submit(enter);

	function enter() {
		event.preventDefault();
		var input = $('#new-entry').val();
		var entry = Number(input);
		currency = currencyFormat(entry);

		$('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');

		total = total + entry;

		$('#total').html (currencyFormat(total));

		$('#new-entry').val('');
	}

	function currencyFormat(number) {

	  var formattedNumber = number.toFixed(2);
	  var formattedPrice = '$' + formattedNumber;
	  return formattedPrice;
	}

	
}