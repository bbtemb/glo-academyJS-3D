import { animate } from './helpers';

const modal = () => {
  const popup = document.querySelector('.popup');
  const modalBlock = document.querySelector('.popup-content');
  const buttons = document.querySelectorAll('.popup-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup.style.display = 'block';
      if (screen.width >= 768) {
        animate({
          duration: 400,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popup.style.opacity = progress;
            modalBlock.style.left = `${progress * 38}%`;
          },
        });
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
