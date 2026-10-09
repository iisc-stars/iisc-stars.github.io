/* IISc STARS — hero slider (dependency-free) */
(function () {
  var slider = document.querySelector('.hero-slider');
  if (!slider) return;
  var slides = slider.querySelectorAll('.slide');
  if (slides.length < 2) return;
  var current = 0;
  function show(n) {
    slides[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
  }
  setInterval(function () { show(current + 1); }, 5000);
})();
