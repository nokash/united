function sendEmail() {
    // get input values from contact form.
    var from = document.getElementById("from").value;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    Email.send({
        SecureToken: "51b7ddd7-694f-4feb-a277-c636c0a8108f", //This is the token used to encrypt SMTP credentials
        To: 'admin@unitedaryan.net',
        From: from,
        Subject: subject,
        Body: body
    }).then(
        // message => alert("Send Succesfully")
    );
    document.getElementById("form").reset();
}