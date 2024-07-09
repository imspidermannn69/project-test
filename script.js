window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // Change the value to when you want the background to appear
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
