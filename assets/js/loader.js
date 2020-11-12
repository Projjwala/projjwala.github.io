$('#form-box').hide();

setTimeout(
	function()
	{
		document.getElementById("loader").remove();
		$('#form-box').fadeIn(400);
	}
, 2000);
