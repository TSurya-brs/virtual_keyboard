function addCharacter(character) {
    const textArea = document.getElementById('textArea');
    textArea.value += character;
    textArea.focus();
}

function backspace() {
    const textArea = document.getElementById('textArea');
    textArea.value = textArea.value.slice(0, -1);
    textArea.focus();
}

function clearText() {
    const textArea = document.getElementById('textArea');
    textArea.value = '';
    textArea.focus();
}
