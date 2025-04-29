const learnMoreContainer = document.querySelector('.learn-more-container');
const dropdownMenu = document.querySelector('.dropdown-menu');

learnMoreContainer.addEventListener('mouseenter', () => {
  dropdownMenu.style.display = 'flex';
});

learnMoreContainer.addEventListener('mouseleave', () => {
  dropdownMenu.style.display = 'none';
});
