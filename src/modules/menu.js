const menu = () => {
  const menu = document.querySelector('menu');
  const body = document.querySelector('body');
  let menuCheck = false;

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
    menuCheck = !menuCheck;
  };

  const smoothScroll = (item) => {
    const itemHref = item.getAttribute('href').substr(1);

    document.getElementById(itemHref).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  body.addEventListener('click', (e) => {
    if (menuCheck) {
      if (!e.target.closest('menu')) handleMenu();
    }

    if (e.target.closest('.menu')) {
      if (screen.width >= 768) handleMenu();
    }

    if (e.target.closest('.close-btn')) {
      handleMenu();
    }

    if (e.target.closest('ul>li>a')) {
      e.preventDefault();
      handleMenu();
      smoothScroll(e.target);
    }

    if (e.target.closest('main>a')) {
      e.preventDefault();
      smoothScroll(e.target.closest('a'));
    }
  });
};

export default menu;
