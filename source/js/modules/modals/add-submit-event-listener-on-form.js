const form = document.querySelector('[data-form]');
const name = document.querySelector('[data-name]');
const phone = document.querySelector('[data-phone]');

let isStorageSupport = true;
let nameData = '';
let phoneData = localStorage.getItem('phone');

if (name) {
  try {
    nameData = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }
}

const addDataToLocalStorage = () => {
  if (isStorageSupport) {
    if (name) {
      localStorage.setItem('name', name.value);
    }

    if (phone) {
      localStorage.setItem('phone', phone.value);
    }
  }
};

const addSubmitEventListenerOnForm = () => {
  if (form) {
    form.addEventListener('submit', addDataToLocalStorage);
  }
};

const addDataToInput = (input, data) => {
  if (input) {
    if (data) {
      input.value = data;
    }
  }
};

const addDataToInputs = () => {
  addDataToInput(name, nameData);
  addDataToInput(phone, phoneData);
};

export {addSubmitEventListenerOnForm, addDataToInputs};
