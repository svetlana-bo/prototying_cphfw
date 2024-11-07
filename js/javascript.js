const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function () {
    // Remove 'active' class from all items
    navItems.forEach(nav => nav.classList.remove('active'));
    // Add 'active' class to the clicked item
    item.classList.add('active');
  });
});



const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function () {
    // Remove active and lift classes from all items
    navItems.forEach(nav => {
      nav.classList.remove('active', 'lift');
    });

    // Add active class to start the circle expansion
    item.classList.add('active');

    // Delay the lift effect slightly for a sequential animation
    setTimeout(() => {
      item.classList.add('lift');
    }, 100); // 100ms delay before lifting the icon
  });
});