window.onload = function() {
	var form = document.getElementById("login-form");
	var submit = document.getElementById("login-signin");

	submit.onclick = function() {
		form.submit();
	}
}
