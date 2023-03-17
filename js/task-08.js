const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const formElements = event.currentTarget.elements

    if (formElements.email.value.length && formElements.password.value.length) {
    
        const mail = formElements.email.value
        const password = formElements.password.value

        const formData = {
            mail,
            password
        }   

        // const formData = new FormData(event.currentTarget)
        // formData.forEach((mail, password) => {
        //     console.log(mail)
        //     console.log(password)
        // })    

        console.log(formData)
        event.currentTarget.reset();
    } else { alert('Please fill in all the fields!') }
}