// function sendMail() {
//     var params = {
//         user_name: document.getElementById("user_name").value,
//         user_email: document.getElementById("user_email").value,
//         user_message: document.getElementById("user_message").value,
//     };


//     const serviceID = "service_64wvvat";
//     const templateID = "template_zr7sawm";

//     emailjs.send(serviceID, templateID, params).then((res) => {
//             document.getElementById("user_name").value = "";
//             document.getElementById("user_email").value = "";
//             document.getElementById("user_message").value = "";
//             console.log(res);
//             alert("your message sent successfully");
//         })
//         .catch((err) => console.log(err));

// }

// // Bu kod, formun gönderimini ele alır ve e-posta göndermek için EmailJS'yi kullanır.
// const contactForm = document.getElementById('contact_form'),
//     contactName = document.getElementById('user_name'),
//     contactEmail = document.getElementById('user_email'),
//     contactMessage = document.getElementById('user_message')

// const sendEmail = (e) => {
//     e.preventDefault()

//     // Check if the fields have values
//     if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '' || contactMessage.value === '') {
//         alert('Please fill out all the input fields.')
//         return false
//     }

//     // Send the email using EmailJS
//     emailjs.sendForm('service_64wvvat', 'template_zr7sawm', '#contact-form', 'mwAOaQy8UOPa421WR')
//         .then((response) => {
//             console.log('SUCCESS!', response.status, response.text)
//             alert('Your message was sent successfully!')
//                 // Clear the form after successful submission
//             contactForm.reset()
//         }, (error) => {
//             console.log('FAILED...', error)
//             alert('Oops! Something went wrong. Please try again later.')
//         })
// }

// // Attach the sendEmail function to the form's submit event
// contactForm.addEventListener('submit', sendEmail)



const contactForm = document.getElementById('contact_form'),
    contactName = document.getElementById('user_name'),
    contactEmail = document.getElementById('user_email'),
    contactProject = document.getElementById('contact_project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
        e.preventDefault()

        // Check if the field has a value

        if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
            // Add and remove color
            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')

            //Show message
            contactMessage.textContent = 'Write all the input fields'
        }
        // else {
        //     // Verify reCAPTCHA
        //     const captchaResponse = grecaptcha.getResponse()
        //     if (!captchaResponse) {
        //         // Show message and add color
        //         contactMessage.classList.remove('color-blue')
        //         contactMessage.classList.add('color-red')
        //         contactMessage.textContent = 'Please complete the reCAPTCHA'
        //     } 
        else {
            // serviceID - templateID - #form - publicKey
            emailjs.sendForm('service_64wvvat', 'template_zr7sawm', '#contact_form', 'mwAOaQy8UOPa421WR')
                .then(() => {
                    // Show message and add color
                    contactMessage.classList.add('color-blue')
                    contactMessage.textContent = 'Message sent '

                    // Remove message after five seconds
                    setTimeout(() => {
                        contactMessage.textContent = ''
                    }, 5000)
                }, (error) => { //Send Error
                    alert('OOPS! SOMETHING HAS FAILED...', error)
                })

            // To clear the input field
            contactName.value = ''
            contactEmail.value = ''
            contactProject.value = ''
        }
    }
    // }
contactForm.addEventListener('submit', sendEmail)