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
