const acc = Array.from(document.getElementsByClassName("faq__element"));

const TEXT_SELECTOR = '.faq-element__text';
const ICON_SELECTOR = '.faq__icon';

const TEXT_ACTIVE = "faq-element__text_active";
const ICON_CLOSE = "faq__icon_close";


acc.forEach((el) => {
  el.addEventListener("click", function () {
    const text = el.querySelector(TEXT_SELECTOR);
    const icon = el.querySelector(ICON_SELECTOR);
    const active = text.classList.contains(TEXT_ACTIVE);

    acc.forEach((el) => {
      el.querySelector(TEXT_SELECTOR).classList.remove(TEXT_ACTIVE);
      el.querySelector(ICON_SELECTOR).classList.remove(ICON_CLOSE);
    })

    if (!active) {
      text.classList.add(TEXT_ACTIVE);
      icon.classList.add(ICON_CLOSE);
    }
  });
});
