// Navigation Dropdown Menu 'Radio' //
const radioDropdown = document.getElementById('radio-dropdown'),
      dropDown = document.querySelector('.dropdown'),
      chevron = document.getElementById('chevron-down');

radioDropdown.addEventListener('click', showDropdown1)
function showDropdown1 () {
    dropDown.classList.toggle('show')
    chevron.classList.toggle('flipchevron')
}
// // // // // // // // // // // // //

// Navigation Dropdown Mediaplayer //
const liveButton = document.getElementById('Live-Button'),
      mediaPlayer = document.querySelector('.mediaplayer'),
      blurredWall = document.querySelector('.blurred-wall');

liveButton.addEventListener('click', showMediaPlayer)
function showMediaPlayer () {
    mediaPlayer.classList.toggle('slide-down')
    blurredWall.classList.toggle('show')
}
// // // // // // // // // // // // //

// Mediaplayer Playing Audio //
const luisterLiveButton = document.querySelector('#luister-live'),
      luisterLiveButton2 = document.querySelector('#luister-live2'),
      luisterLiveIcon = document.querySelector('#luister-live-icon'),
      luisterLiveIcon2 = document.querySelector('#luister-live-icon2'),
      livePlayer = document.getElementById('live-player');

luisterLiveButton.addEventListener('click', playAudio)
function playAudio () {
    luisterLiveIcon.classList.toggle('bxs-right-arrow')
    luisterLiveIcon.classList.toggle('bx-pause')
    if (livePlayer.paused) {
        livePlayer.play()
    } 
    else {
        livePlayer.pause()
    }
}

luisterLiveButton2.addEventListener('click', playLive)
function playLive () {
    luisterLiveIcon2.classList.toggle('bxs-right-arrow')
    luisterLiveIcon2.classList.toggle('bx-pause')
    if (livePlayer.paused) {
        livePlayer.play()
    } 
    else {
        livePlayer.pause()
    }
}
// // // // // // // // // // // // //
