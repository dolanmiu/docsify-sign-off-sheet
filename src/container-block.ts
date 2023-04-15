export const createContainerBlock = (elements: HTMLElement[]) => {
  // <div class="flex flex-col items-end gap-1">...</div>

  const output = document.createElement("div");
  output.classList.add("dsos-flex", "dsos-flex-col", "dsos-items-end", "dsos-gap-2", "dsos-pt-5");
  elements.forEach((element) => {
    output.appendChild(element);
  });
  return output;
};
