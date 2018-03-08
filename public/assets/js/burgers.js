$(function(){
	$(".eatBurger").on("click", function(event) {
		var id = $(this).data("id");
		var newEat = $(this).data("neweat");
		console.log("test", id);
		console.log("test", newEat);

		var newEatState = {
			devoured: newEat
		};

		$.ajax("/burgers/update/" + id, {
			type: "PUT",
			data: newEatState
		}).then(
		function() {
			console.log("changed eat to" + newEat);
			location.reload();
		});
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#bu").val().trim()
			// devoured: $("[name=devoured]:checked").val().trim()
		};

		$.ajax("/burgers/create/", {
			type: "POST",
			data: newBurger
		}).then(
		function() {
			console.log("created new burger");

			location.reload();
		});
	});
});