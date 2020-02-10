function sendEmail() {
    // get input values from contact form.
    var from = document.getElementById("from").value;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: 'ashfordnokash@gmail.com',
        Password: "450CA992B178FA37565A5705F44B345A0BF5",
        To: 'ashfordnokash@gmail.com',
        From: from,
        Subject: subject,
        Body: body
    }).then(
        message => alert("Send Succesfully")
    );
    document.getElementById("form").reset();
}