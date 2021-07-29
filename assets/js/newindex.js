//index.js  
function sendEmail() {
	Email.send({
	 SecureToken : "b5250bd0-5d35-4e19-b3f6-392fd5f8c003",
	To : 'cocosguitars@gmail.com>',
	From : "orderfromjs@gmail.com",
	Subject : "New Order",
	Body : "New Order. Go check it now!",
	}).then(
		message => alert("We are on the case. Thank you!")
	);
}