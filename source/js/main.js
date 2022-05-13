import {removeClassNoJsFromElements} from './modules/modals/remove-class-no-js';
import {addSubmitEventListenerOnForm, addDataToInputs} from './modules/modals/add-submit-event-listener-on-form';
import {addEventClickOnCards, addEventClickForCloseCardOnDocument} from './modules/modals/add-event-on-cards';
import {addEventClickOnVideo, addEventFocusOnVideo} from './modules/modals/add-event-on-video';
import {addEventsOnTitles} from './modules/modals/add-events-on-titles';

window.addEventListener('DOMContentLoaded', () => {

  removeClassNoJsFromElements();

  window.addEventListener('load', () => {
    addEventClickOnVideo();
    addEventFocusOnVideo();
    addEventsOnTitles();
    addEventClickOnCards();
    addEventClickForCloseCardOnDocument();
    addSubmitEventListenerOnForm();
    addDataToInputs();
  });
});
