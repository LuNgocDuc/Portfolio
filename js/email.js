function sendMail() {
    let parms = {
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_3nczl9j", "template_3kahzm7", parms).then(alert("Email Sent !!"))
}