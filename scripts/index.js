import start from "./modules/start.js";
import getFormPerson from "./modules/formperson.js";
import readyPlane from "./modules/readyPlane.js";
import getData from './service/getTour.js'
const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);

  const { main, firstForm } = start(app, title);

  firstForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const forms = getFormPerson(firstForm.count.value);
    firstForm.remove();

    main.append(...forms);

    readyPlane(forms, main);
  });
};
init(".app", "hell world");
