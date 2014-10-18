$(function() {
	function getGoals() {
		$.ajax({
			dataType: "json",
			url: "/goal",//username or something.json
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
		var goal = $("#add_text").val();
		$("#goal_list").append("<li>" + goal + "</li>");
	}

	window.onload = function() {
		getGoals();
		Document.getElementById("add_button") = addGoal;
	};
})();