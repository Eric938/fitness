const tabTitles = document.querySelectorAll('[data-tab-title]');
const tabMonths = document.querySelectorAll('[data-tab-months]');


const addClassIsActive = (target) => {
  if (!target.classList.contains('is-active')) {
    target.classList.add('is-active');
  }
};

const removeClassIsActive = (target) => {
  if (target.classList.contains('is-active')) {
    target.classList.remove('is-active');
  }
};

const closeTabs = () => {
  if (tabTitles.length) {
    tabTitles.forEach((title) => {
      removeClassIsActive(title);
    });
  }
};

const addEventClickOnTitles = () => {
  tabTitles.forEach((title) => {
    title.addEventListener('click', (e) => {
      closeTabs();
      addClassIsActive(title);

      const activeTabAttribute = e.target.getAttribute('data-tab-title');

      if (tabMonths.length) {
        for (let i = 0; i < tabMonths.length; i++) {
          const monthsTabAttribute = tabMonths[i].getAttribute('data-tab-months');

          if (activeTabAttribute === monthsTabAttribute) {
            addClassIsActive(tabMonths[i]);
          } else {
            removeClassIsActive(tabMonths[i]);
          }
        }
      }
    });
  });
};

const addEventFocusOnTitles = () => {
  tabTitles.forEach((title) => {
    title.addEventListener('focus', (e) => {
      closeTabs();
      addClassIsActive(title);

      const activeTabAttribute = e.target.getAttribute('data-tab-title');

      if (tabMonths.length) {
        for (let i = 0; i < tabMonths.length; i++) {
          const monthsTabAttribute = tabMonths[i].getAttribute('data-tab-months');

          if (activeTabAttribute === monthsTabAttribute) {
            addClassIsActive(tabMonths[i]);
          } else {
            removeClassIsActive(tabMonths[i]);
          }
        }
      }
    });
  });
};

const addEventsOnTitles = () => {
  if (tabTitles.length) {
    addEventClickOnTitles();
    addEventFocusOnTitles();
  }
};

export {addEventsOnTitles};
