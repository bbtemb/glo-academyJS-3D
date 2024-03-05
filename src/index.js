import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validation from './modules/validation';
import tabs from './modules/tabs';
import calc from './modules/calc';
import slider from './modules/slider';
import sendForm from './modules/sendForm';

timer('10 march 2024');
menu();
modal();
validation();
tabs();
calc(100);
slider();
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form2',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form3',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
