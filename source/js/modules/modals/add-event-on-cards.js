const coaches = document.querySelectorAll('[data-coach]');

const addClassIsTouched = (target) => {
  if (!target.classList.contains('is-touched')) {
    target.classList.add('is-touched');
  }
};

const removeClassIsTouched = (target) => {
  if (target.classList.contains('is-touched')) {
    target.classList.remove('is-touched');
  }
};

const closeCards = () => {
  if (coaches.length) {
    coaches.forEach((coach) => {
      removeClassIsTouched(coach);
    });
  }
};

const addEventClickForCloseCardOnDocument = () => {
  if (coaches.length) {
    document.addEventListener('click', (e) => {
      let target = e.target;
      if (!target.closest('[data-coach]')) {
        closeCards();
      }
    });
  }
};

const addEventClickOnCards = () => {
  if (coaches.length) {
    coaches.forEach((coach) => {
      coach.addEventListener('click', () => {
        closeCards();
        addClassIsTouched(coach);
      });
    });
  }
};

export {addEventClickOnCards, addEventClickForCloseCardOnDocument};
