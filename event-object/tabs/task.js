const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    const currentActiveTab = document.querySelector('.tab_active');
    currentActiveTab.classList.remove('tab_active');

    tab.classList.add('tab_active');

    const currentActiveContent = document.querySelector('.tab__content_active');
    currentActiveContent.classList.remove('tab__content_active');

    tabContents[index].classList.add('tab__content_active');
  });
});