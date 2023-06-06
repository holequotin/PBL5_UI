var activeButton = null;

function changeColor(button) {
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    button.classList.add('active');
    activeButton = button;
}