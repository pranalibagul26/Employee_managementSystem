let email = document.getElementById("email");
let password = document.getElementById("password");
function fetchLoginData() {
	let userCred = JSON.parse(localStorage.getItem("userData"));

	if(((email.value) == (userCred.username)) && ((password.value) == (userCred.password)))
	{
		open("login.html");

	}
	else
	{
		alert("WRONG CREDENTIALS")
	}
}