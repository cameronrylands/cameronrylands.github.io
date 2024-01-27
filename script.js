function toggleSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.style.height = '50vh';
    } else {
      section.style.height = '0';
    }
  });
}

function toggleSection(sectionId) {
  var items = document.querySelectorAll('nav ul li a');
  items.forEach(function (item) {
    item.classList.remove('active');
  });

  var clickedItem = document.getElementById(sectionId);
  clickedItem.classList.add('active');
}
