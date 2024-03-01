const modal = () => {
  const popup = document.querySelector('.popup');
  const modalBlock = document.querySelector('.popup-content');
  const buttons = document.querySelectorAll('.popup-btn');

  const fadeIn = () => {
    let opacity = 0;
    const animate = () => {
      opacity += 0.05;
      popup.style.opacity = opacity;
      if (opacity < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };
  const transition = () => {
    let x = -10;
    modalBlock.style.left = `${x}%`;
    const animate = () => {
      x += 3;
      modalBlock.style.left = `${x}%`;
      if (x <= 38) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup.style.display = 'block';
      if (screen.width >= 768) {
        fadeIn();
        transition();
      }
    });
  });

  popup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    }
  });

};
export default modal;
