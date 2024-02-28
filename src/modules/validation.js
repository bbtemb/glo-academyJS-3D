const validation = () => {
  const calcInputsList = document.querySelectorAll('.calc-block > input[type="text"]');
  const formNameList = document.querySelectorAll('.form-name');
  const formEmailList = document.querySelectorAll('.form-email');
  const formPhoneList = document.querySelectorAll('.form-phone');
  const formMessList = document.querySelectorAll('.mess');
  const bottomFormName = document.getElementById('form2-name');

  calcInputsList.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
  });

  bottomFormName.addEventListener('blur', (e) => {
    let { value } = e.target;
    value = value.replace(/[^а-яА-ЯёË\- ]*$/, '');
    value = value.replace(/\s+/g, ' ').replace(/-+/g, '-').trim().replace(/-\s+/g, '-')
      .replace(/\s-+/g, '-')
      .replace(/--+/g, '-')
      .replace(/^[^а-яА-ЯёË]+/, '')
      .replace(/[^а-яА-ЯёË]+$/, '');
    value = value.replace(/^(.)(.*)/g, (m, $1, $2) => $1.toUpperCase() + $2.toLowerCase());
    value = value.replace(/(^|\s)\S/g, (a) => a.toUpperCase());
    value = value.replace(/(^|-)\S/g, (a) => a.toUpperCase());
    e.target.value = value;
  });

  formNameList.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let { value } = e.target;
      value = value.replace(/[^а-яА-ЯёË\- ]*$/, '');
      value = value.replace(/\s+/g, ' ').replace(/-+/g, '-').trim().replace(/-\s+/g, '-')
        .replace(/\s-+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^[^а-яА-ЯёË]+/, '')
        .replace(/[^а-яА-ЯёË]+$/, '');
      value = value.replace(/^(.)(.*)/g, (m, $1, $2) => $1.toUpperCase() + $2.toLowerCase());
      value = value.replace(/(^|\s)\S/g, (a) => a.toUpperCase());
      value = value.replace(/(^|-)\S/g, (a) => a.toUpperCase());
      e.target.value = value;
    });
  });

  formMessList.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let { value } = e.target;
      value = value.replace(/[^а-яА-ЯёË\- ]*$/, '');
      value = value.replace(/\s+/g, ' ').replace(/-+/g, '-').trim().replace(/-\s+/g, '-')
        .replace(/\s-+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^[^а-яА-ЯёË]+/, '')
        .replace(/[^а-яА-ЯёË]+$/, '');
      e.target.value = value;
    });
  });

  formEmailList.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let { value } = e.target;
      value = value.replace(/[^a-zA-Z0-9@\-_.!~*']*$/, '');
      value = value.replace(/\s+/g, ' ').replace(/-+/g, '-').trim().replace(/-\s+/g, '-')
        .replace(/\s-+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^[^a-zA-Z0-9@\-_.!~*']+/, '')
        .replace(/[^a-zA-Z0-9@\-_.!~*']+$/, '');
      e.target.value = value;
    });
  });
  formPhoneList.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let { value } = e.target;
      value = value.replace(
        /[^\d()-]*$/,
        '',
      );
      value = value.replace(/\s+/g, ' ').replace(/-+/g, '-').trim().replace(/-\s+/g, '-')
        .replace(/\s-+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^[^0-9(]+/, '')
        .replace(/[^0-9)]+$/, '')
        .replace(/\(\(+/g, '(')
        .replace(/\)\)+/g, ')');
      e.target.value = value;
    });
  });
};

export default validation;
