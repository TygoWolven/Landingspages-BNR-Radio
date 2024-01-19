
const radioDropdown = document.getElementById('radio-dropdown'),
      dropDown = document.querySelector('.dropdown'),
      chevron = document.getElementById('chevron-down');

radioDropdown.addEventListener('click', showDropdown1)
function showDropdown1 () {
    dropDown.classList.toggle('show')
    chevron.classList.toggle('flipchevron')
}

const liveButton = document.getElementById('Live-Button'),
      mediaPlayer = document.querySelector('.mediaplayer'),
      blurredWall = document.querySelector('.blurred-wall');

liveButton.addEventListener('click', showMediaPlayer)
function showMediaPlayer () {
    mediaPlayer.classList.toggle('slide-down')
    blurredWall.classList.toggle('show')
}



