let un = document.getElementById("email");
let pass = document.getElementById("pass");
let add = document.getElementById("address");
let gd = document.getElementById("graduation");
let branch = document.getElementById("branch");
let yop = document.getElementById("yop");


function registerUser()
{

	console.log(un);

	let userData={
		username:un.value,
		password:pass.value,
		address:add.value,
		graduation:gd.value,
		branch:branch.value,
		yop:yop.value
	}

	saveData(userData);
	clearField();
	open("F:/Q spider/Web Technology/JavaScript/Employee_managementSystem/Login.html");
}


function clearField() {
	un.value="";
	pass.value="";
	add.value="";
	gd.value="";
	branch.value="";
	yop.value="";
	
}

function saveData(userData) {
	localStorage.setItem("userData" , JSON.stringify(userData);
	// body...
}



