document.getElementById('submit').addEventListener('click', function () {
    const userEmail = document.getElementById('email-feild');
    const userPassword = document.getElementById('password-feild');
    if (userEmail.value == 'akashkhan@gmail.com' && userPassword.value == 'Password50') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid Email And Password')
    }
})