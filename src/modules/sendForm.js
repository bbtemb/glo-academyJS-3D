const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Мы скоро с вами свяжемся';

  const validate = (list) => {
    let success = true;
    const regexName = /[а-яА-Я\s]+/;
    const regexPhone = /^[0-9()+-]+$/;
    const regexMessage = /^[а-яА-ЯёЁ0-9\s.,;!?"'()]+$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const checkInput = (input, regex) => {
      if (regex.test(input.value)) {
        input.classList.add('success');
        input.classList.remove('error');
      } else {
        input.classList.add('error');
        input.classList.remove('success');
      }
    };

    list.forEach((input) => {
      if (input.name === 'user_name') {
        checkInput(input, regexName);
      }
      if (input.name === 'user_phone') {
        checkInput(input, regexPhone);
      }
      if (input.name === 'user_message') {
        checkInput(input, regexMessage);
      }
      if (input.name === 'user_email') {
        checkInput(input, regexEmail);
      }

      if (!input.classList.contains('success')) {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json());

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      form.append(statusBlock);
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert('Данные не валидны!');
    }
  };

  try {
    if (!form) {
      throw new Error('Форма не найдена');
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
