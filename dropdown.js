const menuIco = document.querySelector('header a img');
const menuDropdown = document.querySelector('header');

function smallMenuClickHandler() {
    menuIco.classList.add('hidden');
    menuDropdown.classList.add('dropdown-active');
}

function closeMenuClickHandler() {
    menuIco.classList.remove('hidden');
    menuDropdown.classList.remove('dropdown-active');
}