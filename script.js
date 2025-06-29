const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});
//cursor
const customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

//arrow
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".arrow-section");
  const arrow = document.querySelector(".arrow-container");

  section.addEventListener("mousemove", (e) => {
    const rect = section.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const degree = angle * (180 / Math.PI);

    arrow.style.transform = `rotate(${degree}deg)`;
  });
});


// Vimeo API
const iframe = document.querySelector('#vimeo-video');
const player = new Vimeo.Player(iframe);

// Cursor elements
const cursor = document.querySelector('#video-cursor');
const wrapper = document.querySelector('#video-wrapper');

// Show/hide cursor
wrapper.addEventListener('mouseenter', () => {
  cursor.style.opacity = 1;
});
wrapper.addEventListener('mouseleave', () => {
  cursor.style.opacity = 0;
});

// Move cursor
wrapper.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Toggle play/pause
let isPlaying = true;
wrapper.addEventListener('click', () => {
  if (isPlaying) {
    player.pause();
    cursor.innerHTML = '▶️';
  } else {
    player.play();
    cursor.innerHTML = '⏸';
  }
  isPlaying = !isPlaying;
});

// 6th section
const trendRows = document.querySelectorAll('.trend-row');
const images = document.querySelectorAll('.trend-image');

trendRows.forEach(row => {
  row.addEventListener('mouseenter', () => {
    const targetId = row.dataset.image;
    images.forEach(img => {
      img.classList.remove('active');
      if (img.id === targetId) img.classList.add('active');
    });
  });
});
