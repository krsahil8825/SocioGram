function showPassword() {
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
