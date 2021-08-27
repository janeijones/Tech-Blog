const signupFormHandler = async function(e) {
    e.preventDefault();
    
    
    const usernameEl = document.querySelector('#username-input-signup')
    const passwordEl = document.querySelector('#password-input-signup')

    console.log(usernameEl.value)
    console.log(passwordEl.value)

    const response = await fetch('/api/user', { //user created
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.valuem
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Unable to signup!')
    }
}

//listener for signup form submit

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
