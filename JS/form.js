
let btn = document.getElementById('send-mail')
let form = document.getElementById('form')

btn.addEventListener('click', function(event){
    event.preventDefault();

    btn.innerText = 'Sending...';
 
    const serviceID = 'default_service';
    const templateID = 'template_4colwei';
 
    emailjs.sendForm(serviceID, templateID, form)
     .then(() => {
       btn.innerText = 'Email Sent';
       alert('Sent!');
     }, (err) => {
       btn.innerText = 'Send Email';
       alert(JSON.stringify(err));
     });
} )


