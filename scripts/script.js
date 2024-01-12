const radioDropdown = document.getElementById('radio-dropdown'),
      dropDown = document.querySelector('.dropdown'),
      chevron = document.getElementById('chevron-down');

radioDropdown.addEventListener('click', showDropdown1)
function showDropdown1 () {
    dropDown.classList.toggle('showdropdown')
    chevron.classList.toggle('flipchevron')
}
