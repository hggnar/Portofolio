// ===== 1. HIGHLIGHT THE NAV LINK OF THE SECTION YOU ARE VIEWING =====
const links = [...document.querySelectorAll('nav a')];                          // the 5 nav links
const sections = links.map(a => document.querySelector(a.getAttribute('href'))); // their matching sections

function updateActiveLink() {
  let current = 0;
  const y = window.scrollY + 160;   // look slightly below the top of the screen

  sections.forEach((section, i) => {
    if (section.offsetTop <= y) current = i;   // last section we have scrolled past
  });

  // At the very bottom of the page, always highlight the last link (CONTACT)
  const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
  if (atBottom) current = sections.length - 1;

  // Add the "active" class to one link, remove it from the others
  links.forEach((a, i) => a.classList.toggle('active', i === current));
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();


// ===== 2. ENLARGE THE CERTIFICATE WHEN CLICKED =====
const certButton = document.getElementById('certBtn');
const certDialog = document.getElementById('certDlg');

certButton.addEventListener('click', () => certDialog.showModal());   // open popup
certDialog.addEventListener('click', () => certDialog.close());       // click anywhere to close
certDialog.addEventListener('keydown', e => {                         // keyboard: Enter or Space also closes
  if (e.key === 'Enter' || e.key === ' ') certDialog.close();
});
