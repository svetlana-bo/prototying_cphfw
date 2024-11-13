const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function () {
    // Remove 'active' class from all items
    navItems.forEach(nav => nav.classList.remove('active'));
    // Add 'active' class to the clicked item
    item.classList.add('active');
  });
});



/* const navItems = document.querySelectorAll('.nav-item'); */

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

/* Dropdown menu on click attempt but it didnt work */
/* function toggleDropdown() {
  console.log()
  const dropdown = document.querySelector(".dropdowncontent");
  dropdown.classList.toggle('show');
}  */

/* Closing the dropdown menu */
/* document.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
    let dropdowns = document.getElementsByClassName("dropdowncontent");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  } 
}); */


