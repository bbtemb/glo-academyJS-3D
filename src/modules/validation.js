const validation = () => {
const calcIputsList = document.querySelectorAll('.calc-block > input[type="text"]')
const formNameList = document.querySelectorAll('.form-name')
const formEmailList = document.querySelectorAll('.form-email')
const formPhoneList = document.querySelectorAll('.form-phone')
const formMessList = document.querySelectorAll('.mess')
const bottomFormName = document.getElementById('form2-name')

    calcIputsList.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    });

    bottomFormName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёË\- ]*$/, '');
    });

    formNameList.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёË\- ]*$/, '');
        });
    });

    formMessList.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёË\- ]*$/, '');
        });
    });

    formEmailList.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']*$/, '');
        });
    });
    formPhoneList.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()\-]*$/
            , '');
        });
    });



};

export default validation;

