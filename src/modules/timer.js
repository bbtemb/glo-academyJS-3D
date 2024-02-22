const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };
  const updateClock = () => {
    const getTime = getTimeRemaining();
    timerDays.textContent = getTime.days < 10 ? `0${getTime.days}` : getTime.days;
    timerHours.textContent = getTime.hours < 10 ? `0${getTime.hours}` : getTime.hours;
    timerMinutes.textContent = getTime.minutes < 10 ? `0${getTime.minutes}` : getTime.minutes;
    timerSeconds.textContent = getTime.seconds < 10 ? `0${getTime.seconds}` : getTime.seconds;

    if (getTime.timeRemaining < 0) {
      clearInterval(updateClock);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };
  updateClock();
  setInterval(updateClock, 1000);
};

export default timer;
