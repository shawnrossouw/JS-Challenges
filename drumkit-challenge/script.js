const keys = document.querySelectorAll('.key');

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyPress = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops the function from running.
    audio.currentTime = 0;
    audio.play();
    keyPress.classList.add('playing');
};

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};

keys.forEach(keyPress => keyPress.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound);