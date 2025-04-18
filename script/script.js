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

// this code auto refres the web page when it responsiveness is checking
let initialAspectRatio = window.innerWidth / window.innerHeight;

window.addEventListener("resize", function () {
	const currentAspectRatio = window.innerWidth / window.innerHeight;
	if (currentAspectRatio !== initialAspectRatio) {
		window.location.reload();
		initialAspectRatio = currentAspectRatio;
	}
});
// this code auto refres the web page when it responsiveness is checking

function toggleMenuopen() {
	let open = document.getElementById("menu-btnopen");
	let close = document.getElementById("menu-btnclose");
	let menu = document.getElementById("menuUL");
	let logoutbtntoggle = document.getElementById("logout-btn-toggle");

	open.style.display = "none";
	close.style.display = "block";
	menu.style.display = "block";
	logoutbtntoggle.style.display = "block";
}

function toggleMenuclose() {
	let close = document.getElementById("menu-btnclose");
	let open = document.getElementById("menu-btnopen");
	let menu = document.getElementById("menuUL");
	let logoutbtntoggle = document.getElementById("logout-btn-toggle");

	open.style.display = "block";
	close.style.display = "none";
	menu.style.display = "none";
	logoutbtntoggle.style.display = "none";
}
