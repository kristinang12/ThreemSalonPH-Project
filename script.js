function showMessage(event) {
    event.preventDefault();
    alert("Thank you for your message in Threema Salon");
}

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, 
        behavior: 'smooth'
      });
    }
  });
});


window.onload = function () {
  const canvas = document.querySelector(".footer-section .particle-canvas");
  const ctx = canvas.getContext("2d");

  const section = document.querySelector(".footer-section");
  canvas.width = section.offsetWidth;
  canvas.height = section.offsetHeight;

  const particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: (Math.random() - 0.5) * 1.5,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "pink";
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
};
