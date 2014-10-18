$(function() {
	$("#signupform").submit(createUser);

	function createUser() {
		var name = $("[name='username']").val();
		var pw = $("[name='password']").val();
		var phone = $("[name='phone_number']").val();
		var url = "localhost:3000/user/";
		var data = '"username":' + "\""+name + "\"," + '"password":' + "\""+pw + "\"," + '"phone":' + "\""+phone + "\""
		var obj = jQuery.parseJSON("{" + data + "}");
		$.ajax({
			type: "POST",
			url: url,
			data: obj,
			error: function(error) {
					handleError(error);
				},
			success: function(result){
				onSuccess(result);
			},
			dataType: "JSON"
		});
	}


	function handleError(error) {
		alert("error: " + error.status);
	}

	function onSuccess(result) {
		alert("success!");
	}

});