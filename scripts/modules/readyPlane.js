import airplane from "./airplane.js";

const readyPlane = (forms, main,tourData) => {
  const data = [];
  let pasCount = 0;
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      for (const element of form.elements) {
        element.disabled = true;
      }
      data.push({
        name: form.name.value,
        ticket: form.ticket.value,
      });
      if (forms.length === data.length) {
        forms.forEach((form) => form.remove());
        airplane(main, data, pasCount,tourData);
      }
    });
  });
  pasCount = forms.length;
  console.log(pasCount);
};

export default readyPlane;
