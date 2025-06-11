function checkPassword(){
    const input = document.getElementById('passwordInput').ariaValueMax;
    const correctPassword = '1';
    const errorMsg = document.getElementById('error-msg');

    if (input === correctPassword) {
        window.location.href = "home.html";
        errorMsg.textContent = '';
    }else {
        errorMsg.textContent = 'Incorrect password. Try again.';
    }    
}

function minimizeContent(){
    const content = document.getElementById('cardContent');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}