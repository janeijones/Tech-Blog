//user selects logout
const logoutHandler = async (req, res) => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
};
  
document.querySelector('#logout').addEventListener('click', logoutHandler);