const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');

dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active'); 
});

const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
        const selectedValue = this.querySelector('.dropdown__link').textContent; 
        dropdownValue.textContent = selectedValue; 
        dropdownList.classList.remove('dropdown__list_active'); 
    });
});