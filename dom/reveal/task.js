function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addActiveClassToReveal() {
  let revealElements = document.querySelectorAll('.reveal');
  
  revealElements.forEach(function(reveal) {
    if (isElementInViewport(reveal)) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
}

document.addEventListener('DOMContentLoaded', addActiveClassToReveal);
document.addEventListener('scroll', addActiveClassToReveal);