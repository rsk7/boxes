export default function draggable(element) {
  element.addEventListener("mousedown", (event) => {
    event.preventDefault();
    element.dragOffset = {
      left: event.clientX - element.offsetLeft,
      top: event.clientY - element.offsetTop
    };
  });

  element.addEventListener("mouseup", (event) => {
    event.preventDefault();
    element.dragOffset = null;
  });

  element.addEventListener("mousemove", (event) => {
    if (element.dragOffset) {
      element.style.left = event.clientX - element.dragOffset.left;
      element.style.top = event.clientY - element.dragOffset.top;
    }
  });

  return element;
};
