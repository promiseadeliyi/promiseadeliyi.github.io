
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const rightRow = document.querySelector('.right-row');

  menuIcon.addEventListener('click', function() {
      rightRow.classList.toggle('active');
  });
});