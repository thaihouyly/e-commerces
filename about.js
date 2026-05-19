
  // ── LEAF BAND ──
  (function() {
    const band = document.getElementById('leafBand');
    const leafSVG = `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
     
      <path d="M40 10 L38 68" stroke="#f0e8d0" stroke-width="1" opacity="0.4"/>
    </svg>`;
    let html = '';
    for (let i = 0; i < 20; i++) {
      html += `<span class="leaf-repeat">${leafSVG}</span>`;
    }
    band.innerHTML = html + html; // double for seamless loop
  })();

  // ── SCROLL REVEAL ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // ── CAROUSEL ──
  const track = document.getElementById('productsTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function getVisible() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return 4;
  }

  function updateCarousel() {
    const card = track.children[0];
    const gap = 24;
    const cardW = card.offsetWidth + gap;
    const visible = getVisible();
    const maxIndex = track.children.length - visible;
    currentIndex = Math.min(currentIndex, maxIndex);
    track.style.transform = `translateX(-${currentIndex * cardW}px)`;
    prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.4' : '1';
  }

  prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateCarousel(); } });
  nextBtn.addEventListener('click', () => {
    const visible = getVisible();
    if (currentIndex < track.children.length - visible) { currentIndex++; updateCarousel(); }
  });
  window.addEventListener('resize', updateCarousel);
  updateCarousel();
 
  

