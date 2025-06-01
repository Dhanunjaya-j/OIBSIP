
  const slidesWrapper = document.getElementById('slidesWrapper');
  const slides = document.querySelectorAll('.slide');
  const sliderContainer = document.querySelector('.slider-container');
  const totalSlides = slides.length;
  let currentIndex = 0;
  let interval;
  

  function updateSlide() {
    slides.forEach((slide, i) => {
      slide.classList.remove('fade-out');
      const text = slide.querySelector('.slide-text');
      if (text) text.classList.remove('animate-text');
    });

    const currentSlide = slides[currentIndex];
    const text = currentSlide.querySelector('.slide-text');
    if (text) {
      void text.offsetWidth; // trigger reflow
      text.classList.add('animate-text');
    }

    currentSlide.classList.add('fade-out');
    slidesWrapper.style.transform = `translateY(-${currentIndex * 600}px)`;
  }

  function autoSlide() {
    interval = setInterval(() => {
      updateSlide();

      setTimeout(() => {
        currentIndex++;
        if (currentIndex >= totalSlides) {
          clearInterval(interval);
          showFinalView();
          return;
        }
        updateSlide();
      }, 3000); // Wait 3s before transition
    }, 4000); // Every 4s
  }

  function showFinalView() {
    // Reset wrapper to show all slides side-by-side
    sliderContainer.classList.add('final-view');
  }
  updateSlide();
  autoSlide();
