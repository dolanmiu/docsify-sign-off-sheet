export const createModal = (document: Document, content: ChildNode[]) => {
  const modalButton = document.createElement("label");
  modalButton.setAttribute("for", "my-modal");
  modalButton.classList.add("dsos-btn", "dsos-btn-xs");
  modalButton.innerHTML = "View Sign-Off Sheet";

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "my-modal");
  input.classList.add("dsos-modal-toggle");

  const modal = document.createElement("div");
  modal.classList.add("dsos-modal");

  const modalBox = document.createElement("div");
  modalBox.classList.add("dsos-modal-box", "dsos-relative");
  modal.appendChild(modalBox);

  const modalClose = document.createElement("label");
  modalClose.setAttribute("for", "my-modal");
  modalClose.classList.add(
    "dsos-btn",
    "dsos-btn-sm",
    "dsos-btn-circle",
    "dsos-absolute",
    "dsos-top-2",
    "dsos-right-2"
  );
  modalClose.innerHTML = "✕";
  modalBox.appendChild(modalClose);

  const modalHeading = document.createElement("h3");
  modalHeading.classList.add("dsos-text-lg", "dsos-font-bold");
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
