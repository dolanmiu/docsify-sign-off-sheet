export const createModal = (document: Document, content: ChildNode[]) => {
  const modalButton = document.createElement("label");
  modalButton.setAttribute("for", "my-modal");
  modalButton.classList.add("btn", "btn-xs");
  modalButton.innerHTML = "View Sign-Off Sheet";

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "my-modal");
  input.classList.add("modal-toggle");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalBox = document.createElement("div");
  modalBox.classList.add("modal-box", "relative");
  modal.appendChild(modalBox);

  const modalClose = document.createElement("label");
  modalClose.setAttribute("for", "my-modal");
  modalClose.classList.add(
    "btn",
    "btn-sm",
    "btn-circle",
    "absolute",
    "top-2",
    "right-2"
  );
  modalClose.innerHTML = "✕";
  modalBox.appendChild(modalClose);

  const modalHeading = document.createElement("h3");
  modalHeading.classList.add("text-lg", "font-bold");
  modalHeading.setAttribute("style", "margin: 0 !important");
  modalHeading.innerHTML = "Sign-Off Sheet";
  modalBox.appendChild(modalHeading);

  for (let i = 0; i < content.length; i++) {
    modalBox.appendChild(content[i]);
  }

  const modalWrapper = document.createElement("div");
  modalWrapper.appendChild(modalButton);
  modalWrapper.appendChild(input);
  modalWrapper.appendChild(modal);

  return modalWrapper;
};
