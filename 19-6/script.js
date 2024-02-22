const greeting = document.querySelector('.greeting');
const day = document.querySelector('.day');
const time = document.querySelector('.time');
const newYearCount = document.querySelector('.new-year-count');

console.log(greeting);
console.log(day);
console.log(time);
console.log(newYearCount);

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 6) {
    greeting.textContent = 'Доброй ночи!';
  } else if (hour < 12) {
    greeting.textContent = 'Доброе утро!';
  } else if (hour < 18) {
    greeting.textContent = 'Добрый день!';
  } else {
    greeting.textContent = 'Добрый вечер!';
  }
}

function getDay() {
  const dayOfWeek = new Date().getDay();
  switch (dayOfWeek) {
    case 0:
      day.textContent = 'Воскресенье';
      break;
    case 1:
      day.textContent = 'Понедельник';
      break;
    case 2:
      day.textContent = 'Вторник';
      break;
    case 3:
      day.textContent = 'Среда';
      break;
    case 4:
      day.textContent = 'Четверг';
      break;
    case 5:
      day.textContent = 'Пятница';
      break;
    case 6:
      day.textContent = 'Суббота';
      break;
  }
  day.textContent = `Сегодня: ${day.textContent}`;
}

function getTime() {
  let nowTime = new Date().toLocaleTimeString('en');
  time.textContent = `Текущее время: ${nowTime}`;
}

function getNewYearCount() {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = newYear - now;
  const daysToNewYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  newYearCount.textContent = `До нового года осталось: ${daysToNewYear} дней`;
}

getGreeting();
getDay();
getTime();
getNewYearCount();
