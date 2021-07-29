var templateParams = {
    name: 'BaliStyle',
    notes: 'New Order: Check it out!'
};
 
emailjs.send('service_rjp3cof', 'template_2s9qg7p', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

message => alert("We are on the case. Thank you!");