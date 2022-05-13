const elements = document.querySelectorAll('.no-js');

const removeClassNoJs = (target) => {
  if (target.classList.contains('no-js')) {
    target.classList.remove('no-js');
  }
};

const removeClassNoJsFromElements = () => {
  if (elements.length) {
    elements.forEach((element) => {
      removeClassNoJs(element);
    });
  }
};

export {removeClassNoJsFromElements};
