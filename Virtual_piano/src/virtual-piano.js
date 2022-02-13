const keybordElements = document.querySelectorAll("kbd");
const getText = keybordElements => {
    let buttons = [];
    keybordElements.forEach(function (element) {
        buttons.push(element.id);
    })
    return buttons;
};

document.addEventListener('keydown', function(event) {
    const buttons = getText(keybordElements);
    if (buttons.includes(event.code)) {
        let audio = new Audio(`../sounds/${event.key.toUpperCase()}.mp3`);
        audio.play();
    } else {
        console.log('not active button');
    }
});

