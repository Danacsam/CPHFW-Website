const scrollToTopButton = document.getElementById('scrollToTop');

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

scrollToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
