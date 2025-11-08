// Fade-in on scroll animation
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
fadeEls.forEach(el => observer.observe(el));

// ===== GALLERY LIGHTBOX LOGIC =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.gallery-grid img, .gallery-grid video').forEach(media => {
  media.addEventListener('click', () => {
    lightbox.style.display = 'flex';

    if (media.tagName.toLowerCase() === 'img') {
      lightboxImg.src = media.src;
      lightboxImg.style.display = 'block';
      lightboxVideo.style.display = 'none';
      lightboxVideo.pause();
    } else if (media.tagName.toLowerCase() === 'video') {
      lightboxVideo.src = media.src;
      lightboxVideo.style.display = 'block';
      lightboxImg.style.display = 'none';
      lightboxVideo.play();
    }
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxVideo.pause();
});