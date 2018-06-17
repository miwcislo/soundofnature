'use strict'

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('active');
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
