const radioDropdown = document.getElementById('radio-dropdown'),
      landingspaginaDropdown = document.getElementById('landingspagina-dropdown'),
      dropDown1 = document.querySelector('.dropdown1'),
      dropDown2 = document.querySelector('.dropdown2'),
      chevron1 = document.getElementById('chevron-down1'),
      chevron2 = document.getElementById('chevron-down2');

radioDropdown.addEventListener('click', showDropdown1)
function showDropdown1 () {
    dropDown1.classList.toggle('showdropdown')
    chevron1.classList.toggle('flipchevron')
}

landingspaginaDropdown.addEventListener('click', showDropdown2)
function showDropdown2 () {
    dropDown2.classList.toggle('showdropdown')
    chevron2.classList.toggle('flipchevron')
}