$('#form-box').hide();

setTimeout(
	function()
	{
		document.getElementById("loader").remove();
		$('#form-box').fadeIn(1000);
	}
, 2000);