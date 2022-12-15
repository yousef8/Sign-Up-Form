// Capturing our Main Elements
const passwordElement = document.querySelector('form>.field:nth-child(5)>input')

const confirmElement = document.querySelector('form>.field:nth-child(6)>input')

const noMatchHelpBlock = document.querySelector('#noMatchHelpBlock')

const matchHelpBlock = document.querySelector('#matchHelpBlock')

// Helper functions to manipulate UI

function showMatchUI() {
    confirmElement.classList.add('match');
    confirmElement.classList.remove('noMatch');
    matchHelpBlock.classList.add('showMatch');
    noMatchHelpBlock.classList.remove('showNoMatch');
}

function showNoMatchUI() {
    confirmElement.classList.remove('match');
    confirmElement.classList.add('noMatch');
    noMatchHelpBlock.classList.add('showNoMatch');
    matchHelpBlock.classList.remove('showMatch');
}

function cleanMatchUI() {
    confirmElement.classList.remove('match', 'noMatch');
    noMatchHelpBlock.classList.remove('showNoMatch');
    matchHelpBlock.classList.remove('showNoMatch');
}

// check if both passwords match
function checkBothPasswordMatch(password, confirmPassword) {
    if (password.length === 0 && confirmPassword.length === 0) {
        cleanMatchUI();
        return false;
    }
    if (password === confirmPassword) {
        showMatchUI();
        return true;
    }

    showNoMatchUI();
    return false;

}

passwordElement.addEventListener('input', e => {
    checkBothPasswordMatch(passwordElement.value, confirmElement.value);
})

confirmElement.addEventListener('input', (e) => {
    checkBothPasswordMatch(passwordElement.value, confirmElement.value);
})