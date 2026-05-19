 document.getElementById('sendBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
 
    if (!name || !email || !message) {
      showToast('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email.');
      return;
    }
    showToast('Message sent! We\'ll be in touch soon ✓');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
 
  // Newsletter
  document.getElementById('nlBtn').addEventListener('click', function() {
    const email = document.getElementById('nlEmail').value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Enter a valid email to subscribe.');
      return;
    }
    showToast('Subscribed! Your 15% off code is on its way ✓');
    document.getElementById('nlEmail').value = '';
  });
 
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3200);
  }
 
  // Intersection observer for fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.email-section, .instagram-section, .map-section').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });