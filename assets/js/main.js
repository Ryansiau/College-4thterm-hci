
$(document).ready(function() {
	$(".slider__button--next").on("click", function() {
		var currentImg = $(".slider__image--active");
		var nextImg = currentImg.next();

		if(nextImg.length) {
			currentImg.removeClass("slider__image--active").css("z-index", -10);
			nextImg.addClass("slider__image--active").css("z-index", 10);
		}
	});

	$(".slider__button--prev").on("click", function() {
		var currentImg = $(".slider__image--active");
		var prevImg = currentImg.prev();

		if(prevImg.length) {
			currentImg.removeClass("slider__image--active").css("z-index", -10);
			prevImg.addClass("slider__image--active").css("z-index", 10);
		}
	});

	$(".galleries__button").click(function() {
		$(".galleries__big-image").attr("src", $(this).children(":first").attr("src"));
	});

	$("#pre-register-form").on("submit", function() {
		var email = $("#email").val();
		var username = $("#username").val();
		var password = $("#password").val();
		var dob = $("#dob").val();

		if(email === "") {
			alert("Email cannot be empty!");
			return false;
		}

		if(!email.includes("@") || !email.includes(".")) {
			alert("Please enter a valid email!");
			return false;
		}

		if(username.length < 3) {
			alert("Username must contain at least 3 characters!");
			return false;
		}

		if(password.length < 8) {
			alert("Password must contain at least 8 characters!");
			return false;
		}

		if($("#male").is(":not(:checked)") && $("#female").is(":not(:checked)")) {
			alert("Gender cannot be empty!");
			return false;
		}

		if(dob === "") {
			alert("Date of Birth cannot be empty!");
			return false;
		}

		if($("#tos").is(":not(:checked)")) {
			alert("You must agree to the Terms and Conditions!");
			return false;
		}

		return true;
	});
});