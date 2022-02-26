const checkBoxes = document.querySelectorAll('div.check-buttons > input');
const levers = document.querySelectorAll('div.levers > input');
const password = document.getElementById('password');
const okButton = document.getElementById('ok');
const launch = document.getElementById('launch');
const rocket = document.querySelector('.rocket');
const validPassword = '12345';

okButton.addEventListener('click', () => {
        if (password.value === validPassword) {
            for (const checkBox of checkBoxes) {
                checkBox.disabled = false;
            }

            for (const lever of levers) {
                lever.disabled = false;
            }

            checkBoxes.disabled = false;
            password.disabled = false;
        }
    }
);

launch.addEventListener('click', () => {
    rocket.classList.add('rocket-launch');
});

const checkBoxCheck = () => {
    for (const checkBox of checkBoxes) {
        if (checkBox.checked === false) {
            return false;
        }
    }
    return true;
}

const leverCheck = () => {
    for (const lever of levers) {
        if (Number(lever.value) !== 100) {
            return false;
        }
    }
    return true;
};

const checkButtonState = () => {
    launch.disabled = !(leverCheck() && checkBoxCheck());
};
