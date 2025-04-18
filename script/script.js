function showPasswordsignin() {
	let password = document.getElementById("password");
	let showpassword = document.getElementById("showpassword");

	if (password.type === "password") {
		password.type = "text";
		showpassword.innerHTML = "Hide Password";
	} else {
		password.type = "password";
		showpassword.innerHTML = "Show Password";
	}
}

function showPasswordsignup() {
	let password = document.getElementById("password");
	let confirmPassword = document.getElementById("confirmPassword");
	let showpassword = document.getElementById("showpassword");

	if (password.type === "password") {
		password.type = "text";
		confirmPassword.type = "text";
		showpassword.innerHTML = "Hide Password";
	} else {
		password.type = "password";
		confirmPassword.type = "password";
		showpassword.innerHTML = "Show Password";
	}
}
