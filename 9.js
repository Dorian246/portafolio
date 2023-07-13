document.addEventListener('DOMContentLoaded', function() {
    const roundImage = document.querySelector('.round-image');

    roundImage.addEventListener('click', function() {
      roundImage.classList.toggle('expand');
    });
  });