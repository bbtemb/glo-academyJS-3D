const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const scrollBtn = document.querySelector('main>a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  const smoothScroll = (item) => {
    const itemHref = item.getAttribute('href').substr(1);

    document.getElementById(itemHref).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  menuBtn.addEventListener('click', handleMenu);

  closeBtn.addEventListener('click', handleMenu);

  scrollBtn.addEventListener('click', () => {
    event.preventDefault();
    smoothScroll(scrollBtn);
  });

  menuItems.forEach((menuItem) => menuItem.addEventListener('click', (event) => {
    event.preventDefault();
    handleMenu();
    smoothScroll(menuItem);
  }));
};

export default menu;
