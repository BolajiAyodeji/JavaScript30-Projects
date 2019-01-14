window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; //Stop function from running together
  audio.currentTime = 0; //Rewind sound
  audio.play();

});
