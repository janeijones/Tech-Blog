const loginFormHandler = async function(e){
    e.preventDefault()

    const usernameEl = document.querySelector("#username-input-login")
    const passwordEl = document.querySelector("#password-input-login")


    const response = await fetch('/api/user/login', { //checks if user is able to login
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/dashboard') //if able to login, go to dashboard
    } else {
        alert('Unable to login!')
    }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler)