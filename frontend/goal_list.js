$(function() {
	var userId;

	function getGoals() {
		$.ajax({
			dataType: "json",
			url: "localhost:3000/user/" + "userID" + "/goal",//username or something.json
			success: function(result){
				// append goals to the div in html
				showGoals(result);
			};
		});
	}

	function showGoals(json) {
		for(var i = 0; i < json.goal.length; i++) {
			var goal = json.goal[i];
			//$("#goals").append("<ul>");
			$("#goal_list").append("<li>" + goal + "</li>");
		}
	}

	function addGoal() {
		var goal = "\"text\": " + "\"" + $("#add_text").val() + "\",\n";
		var obj = jQuery.parseJSON("{" + goal + "}");
		$.ajax({
			dataType: "json",
			url: "localhost:3000/user/" + userID + "/goal",
			type: "POST",
			data: obj;
			success: function(result){
				// append goal
				$("#goal_list").append("<li>" + $("#add_text").val() + "</li>");
				$("#add_text").val() = "";
			};
		});
	}

	function showInfo() {
		var userName = getCookie("userName");
		$("user").html(username);
	}

	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	    }
	    return "";
	}

	window.onload = function() {
		userId = getCookie("userID");
	    if (userId != "") {
			showInfo();
			getGoals();
			Document.getElementById("add_button").onclick = addGoal;
	    }
	};
})();