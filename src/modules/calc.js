import { animate } from './helpers';

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.getElementById('total');

  let lastValue = 0;
  let value = 0;

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcCount.value > 1) {
      calcCountValue += +(calcCount.value / 10);
    }

    if (calcType.value && calcSquare.value) {
      totalValue = (price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue);
    } else {
      totalValue = 0;
    }

    return totalValue;
  };

  calcBlock.addEventListener('change', (e) => {
    if (e.target === calcType || e.target === calcSquare
     || e.target === calcCount || e.target === calcDay) {
      value = countCalc();
      if (value > 0) {
        animate({
          duration: 400,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            const progressValue = lastValue + (value - lastValue) * (progress.toFixed(2));
            if (progress === 1) {
              lastValue = progressValue;
            }
            total.innerHTML = Math.floor(progressValue);
          },
        });
      }
    }
  });
};

export default calc;
