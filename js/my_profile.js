
//Go back function for navigation
function goBack() {
    window.history.back();
  };
  
  
function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');
  
    // Remove the "active" class from all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));
  
    // Show the selected tab and add "active" class to the clicked tab
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }