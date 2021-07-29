//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "orderfromjs@gmail.com",
	Password : "#!621%07447^&",
	To : 'cocosguitars@gmail.com>',
	From : "orderfromjs@gmail.com",
	Subject : "New Order",
	Body : "New Order. Go check it now!",
	}).then(
		message => alert("We are on the case. Thank you!")
	);
}