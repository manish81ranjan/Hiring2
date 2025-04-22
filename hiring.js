function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');
    const featureCards = document.querySelectorAll('.feature-card');
    const contact = document.querySelector('.contact');
    const footer = document.querySelector('footer');
    const checkbox = document.getElementById('darkModeCheckbox');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    hero.classList.toggle('dark-mode');
    contact.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    featureCards.forEach(card => card.classList.toggle('dark-mode'));

    // Sync checkbox state with dark mode
    checkbox.checked = !checkbox.checked;


    document.getElementById("get-started").addEventListener("click", function () {
        // Show the CV upload section when button is clicked
        document.getElementById("cv-upload-section").style.display = "block";
    });

}