const calc = () => {
  const calcTotal = document.querySelector('.calc-total span');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const calcItem = document.querySelectorAll('.calc-item');
  let square;
  let count;
  let day;

  calcItem.forEach((item) => {
    item.addEventListener('input', (e) => {
      calcSquare.value === '' ? square = 1 : square = calcSquare.value;
      calcCount.value === '' ? count = 1 : count = calcCount.value;
      calcDay.value === '' ? day = 1 : day = calcDay.value;
      calcTotal.innerText = Math.round(square * count * (10 / day) * 1000);
    });
  });
};

export default calc;
