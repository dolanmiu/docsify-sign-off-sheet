import moment from "moment";
import Sugar from "sugar";

export const createSignOffStatusElement = (
  lastSignOffDate: Date | null,
  signOffCadence: string
): HTMLElement => {
  // <div><span>Last Sign-Off: </span><strong>{DATE}</strong>. Next Sign-Off Due: {DATE}</span></div>
  const output = document.createElement("div");
  const span = document.createElement("span");
  output.appendChild(span);

  if (!lastSignOffDate) {
    span.innerHTML = "No sign-offs found";
    return output;
  }

  span.innerHTML = "Last Sign-Off: ";
  const strong = document.createElement("strong");
  output.appendChild(strong);
  strong.innerHTML = moment(lastSignOffDate).format("MMM Do YYYY");

  const span2 = document.createElement("span");
  output.appendChild(span2);
  span2.innerHTML = `. Next Sign-Off: `;
  const strong2 = document.createElement("strong");
  output.appendChild(strong2);
  const nextSignOffDate = Sugar.Date.advance(lastSignOffDate, signOffCadence);
  const diff = nextSignOffDate.getTime() - new Date().getTime();
  strong2.innerHTML = moment(nextSignOffDate).fromNow();

  if (diff < 0) {
    strong2.setAttribute("style", "color: red; !important");
  }

  return output;
};
