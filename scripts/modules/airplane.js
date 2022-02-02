import createElement from "./createElement.js";

const createCockpit = (titleText) => {
  const cockpit = createElement("div", {
    className: "cockpit",
  });

  const title = createElement("h1", {
    className: "cockpit-title",
    textContent: titleText,
  });

  const button = createElement("button", {
    className: "cockpit-confirm",
    type: "submit",
    textContent: "Подтвердить",
  });

  cockpit.append(title, button);
  return cockpit;
};

const createExit = () => {
  const fuselage = createElement("div", {
    className: "fuselage exit",
  });
  return fuselage;
};
const createBlockSeat = (n, count) => {
  const letters = ["A", "B", "C", "D", "E", "F"];

  const fuselage = createElement("ol", {
    className: "fuselage",
  });

  for (let i = n; i < count + n; i++) {
    const wrapperRow = createElement("li");
    const seats = createElement("ol", {
      className: "seats",
    });

    const seatsRow = letters.map((letter) => {
      const seat = createElement("li", {
        className: "seat",
      });
      const wrapperCheck = createElement("label");

      const check = createElement("input", {
        name: "seat",
        type: "checkbox",
        value: `${i}${letter}`,
      });

      wrapperCheck.append(check);
      seat.append(wrapperCheck);
      return seat;
    });
    seats.append(...seatsRow);
    wrapperRow.append(seats);
    fuselage.append(wrapperRow);
  }
  return fuselage;
};

const createAirplane = (title, scheme) => {
  const choisesSeat = createElement("form", {
    className: "choises-seat",
  });
  const plane = createElement("fieldset", {
    className: "plane",
    name: "plane",
  });
  const cockpit = createCockpit(title);

  let n = 1;

  const elements = scheme.map((type) => {
    if (type === "exit") {
      return createExit();
    } else if (typeof type === "number") {
      const blockSeat = createBlockSeat(n, type);
      n = n + type;
      return blockSeat;
    }
  });

  plane.append(cockpit, ...elements);
  choisesSeat.append(plane);

  return choisesSeat;
};

const wordFinisher = (pasCount, finisher) => {
  if (pasCount === 1) {
    finisher = "то";
  } else if (pasCount === 2 || 3 || 4) {
    finisher = "та";
  } else (pasCount === 5 || 6)
  {
    finisher = 'т'; 
  }
  console.log(pasCount);
  console.log(finisher);
  return finisher;
};

const airplane = (main, data, pasCount) => {
  const title = `Выберите ${pasCount} мес${wordFinisher(pasCount)}`;
  const scheme = ["exit", 11, "exit", 1, "exit", 17, "exit"];

  main.append(createAirplane(title, scheme));
};

export default airplane;
