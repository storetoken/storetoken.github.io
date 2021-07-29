//index.js  
function sendEmail() {
	Email.send({
	 SecureToken : "f1dc07b7-7402-44bd-a76a-38d466c53cae",
	To : "info@cocosguitars.com",
	From : "cocosguitars@gmail.com",
	Subject : "New Order",
	Body : "New Order. Go check it now!",
	}).then(
		message => alert("We are on the case. Thank you!")
	);
}
